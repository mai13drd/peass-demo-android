#!/bin/bash

ANDROID_SDK_ROOT=$ANDROID_SDK_ROOT
if [ -z "$ANDROID_SDK_ROOT" ]
then
    echo "ANDROID_SDK_ROOT is not set!"
    exit 1
else
    echo "ANDROID_SDK_ROOT: $ANDROID_SDK_ROOT"
fi

DEMO_PROJECT_NAME=demo-project-android

if [ "$#" -ne 1 ]; then
	branch="master"
else
	branch=$1
fi

tar -xf "$DEMO_PROJECT_NAME".tar.xz
git clone -b $branch https://github.com/DaGeRe/peass.git && \
	cd peass && \
	./mvnw clean install -DskipTests=true -V

DEMO_HOME=$(pwd)/../$DEMO_PROJECT_NAME
DEMO_PROJECT_PEASS=../"$DEMO_PROJECT_NAME"_peass
EXECUTION_FILE=results/execute_"$DEMO_PROJECT_NAME".json
DEPENDENCY_FILE=results/deps_"$DEMO_PROJECT_NAME".json
CHANGES_DEMO_PROJECT=results/changes_"$DEMO_PROJECT_NAME".json
PROPERTY_FOLDER=results/properties_"$DEMO_PROJECT_NAME"/

VERSION="$(cd "$DEMO_HOME" && git rev-parse HEAD)"

# It is assumed that $DEMO_HOME is set correctly and PeASS has been built!
echo ":::::::::::::::::::::SELECT:::::::::::::::::::::::::::::::::::::::::::"
./peass select -folder $DEMO_HOME

if [ ! -f "$EXECUTION_FILE" ]
then
    echo "::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::"
    echo "$EXECUTION_FILE could not be found!"
    echo "::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::"
	exit 1
fi

echo ":::::::::::::::::::::MEASURE::::::::::::::::::::::::::::::::::::::::::"
./peass measure -executionfile $EXECUTION_FILE -folder $DEMO_HOME -iterations 5 -warmup 5 -repetitions 1 -vms 4

echo "::::::::::::::::::::GETCHANGES::::::::::::::::::::::::::::::::::::::::"
./peass getchanges -data $DEMO_PROJECT_PEASS -dependencyfile $DEPENDENCY_FILE

#Check, if $CHANGES_DEMO_PROJECT contains the correct commit-SHA
TEST_SHA=$(grep -A1 'versionChanges" : {' $CHANGES_DEMO_PROJECT | grep -v '"versionChanges' | grep -Po '"\K.*(?=")')
if [ "$VERSION" != "$TEST_SHA" ]
then
    echo "commit-SHA is not equal to the SHA in $CHANGES_DEMO_PROJECT"
    cat results/statistics/"$DEMO_PROJECT_NAME".json
    exit 1
else
    echo "$CHANGES_DEMO_PROJECT contains the correct commit-SHA."
fi

echo "::::::::::::::::::::SEARCHCAUSE:::::::::::::::::::::::::::::::::::::::"
./peass searchcause -iterations 5 -warmup 5 -repetitions 1 -vms 4 -version $VERSION \
    -test app§com.example.android_example.ExampleUnitTest\#test_TestMe \
    -folder $DEMO_HOME \
    -executionfile $EXECUTION_FILE

echo "::::::::::::::::::::VISUALIZERCA::::::::::::::::::::::::::::::::::::::"
./peass visualizerca -data $DEMO_PROJECT_PEASS -propertyFolder $PROPERTY_FOLDER

#Check, if a slowdown is detected for TestMe#callTestmethod
STATE=$(grep -A21 '"call" : "com.example.android_example.TestMe#callTestmethod",' results/$VERSION/app§com.example.android_example.ExampleUnitTest_test_TestMe.js \
    | grep '"state" : "SLOWER",' \
    | grep -o 'SLOWER')
if [ "$STATE" != "SLOWER" ]
then
    echo "State for TestMe#callTestmethod in com.example.android_example.ExampleUnitTest_test_TestMe.js has not the expected value SLOWER, but was $STATE!"
    cat results/$VERSION/app§com.example.android_example.ExampleUnitTest_test_TestMe.js
    exit 1
else
    echo "Slowdown is detected for TestMe#callTestmethod."
fi

SOURCE_METHOD_LINE=$(grep "TestMe.callTestmethod_" results/$VERSION/app§com.example.android_example.ExampleUnitTest_test_TestMe.js -A 3 | head -n 3 | grep testMethod)
if [[ "$SOURCE_METHOD_LINE" != *"testMethod();" ]]
then
    echo "Line could not be detected - source reading probably failed."
    echo "Line: "
    echo "SOURCE_METHOD_LINE: $SOURCE_METHOD_LINE"
    exit 1
else
    echo "SOURCE_METHOD_LINE is correct."
fi
