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

tar -xf "$DEMO_PROJECT_NAME".tar.xz
git clone https://github.com/DaGeRe/peass.git && \
	cd peass && \
	./mvnw clean install -DskipTests=true -V

DEMO_HOME=$(pwd)/../$DEMO_PROJECT_NAME
DEMO_PROJECT_PEASS=../"$DEMO_PROJECT_NAME"_peass
EXECUTION_FILE=results/execute_"$DEMO_PROJECT_NAME".json
DEPENDENCY_FILE=results/deps_"$DEMO_PROJECT_NAME".json
CHANGES_DEMO_PROJECT=results/changes_"$DEMO_PROJECT_NAME".json
PROPERTY_FOLDER=results/properties_"$DEMO_PROJECT_NAME"/

RIGHT_SHA="$(cd "$DEMO_HOME" && git rev-parse HEAD)"

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
if [ "$RIGHT_SHA" != "$TEST_SHA" ]
then
    echo "commit-SHA is not equal to the SHA in $CHANGES_DEMO_PROJECT"
    cat results/statistics/"$DEMO_PROJECT_NAME".json
    exit 1
else
    echo "$CHANGES_DEMO_PROJECT contains the correct commit-SHA."
fi

# If minor updates to the project occur, the version name may change
VERSION=$(cat $EXECUTION_FILE | grep '"testcases" :' -B 1 | head -n 1 | tr -d "\": {")
echo "VERSION: $VERSION"

echo "::::::::::::::::::::SEARCHCAUSE:::::::::::::::::::::::::::::::::::::::"
./peass searchcause -iterations 5 -warmup 5 -repetitions 1 -vms 4 -version $VERSION \
    -test app§com.example.android_example.ExampleUnitTest\#test_TestMe \
    -folder $DEMO_HOME \
    -executionfile $EXECUTION_FILE

echo "::::::::::::::::::::VISUALIZERCA::::::::::::::::::::::::::::::::::::::"
./peass visualizerca -data $DEMO_PROJECT_PEASS -propertyFolder $PROPERTY_FOLDER

echo "::::::::::::::::changes_android-example-correct.json::::::::::::::::::"
cat results/changes_demo-project-android.json

echo "::::::::::::::::::::android-example-correct.json::::::::::::::::::::::"
cat results/statistics/demo-project-android.json

echo
echo

#Check, if a slowdown is detected for App#test
state=$(grep -A21 '"call" : "com.example.android_example.TestMe#test",' results/$version/app§com.example.android_example.ExampleUnitTest_test_TestMe.js | grep '"state" : "SLOWER",' | grep -o 'SLOWER')

if [ "$state" != "SLOWER" ]
then
    echo "State for TestMe#test in com.example.android_example.ExampleUnitTest_test_TestMe.js has not the expected value SLOWER!"
    echo "Found value for state: $state"
    echo ":::::::::::::::::::ExampleUnitTest_test_TestMe.js:::::::::::::::::::::"
    cat results/$version/app§com.example.android_example.ExampleUnitTest_test_TestMe.js
    exit 1
else
    echo "Slowdown is detected for TestMe#test."
fi
