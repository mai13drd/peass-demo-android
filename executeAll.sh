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

if [ ! -f results/execute_demo-project-android.json ]
then
	cat ../demo-project-android_peass/projectTemp/1_peass/logs/0eda989ac6fdf0db2a496d9f9410759c67f23863/*
	echo "An error occured; please check the logs above"
	exit 1
fi

echo ":::::::::::::::::::::MEASURE::::::::::::::::::::::::::::::::::::::::::"
./peass measure -executionfile results/execute_demo-project-android.json -folder $DEMO_HOME -iterations 5 -warmup 5 -repetitions 1 -vms 4

echo "::::::::::::::::::::GETCHANGES::::::::::::::::::::::::::::::::::::::::"
./peass getchanges -data ../demo-project-android_peass/ -dependencyfile results/deps_demo-project-android.json

#Check, if changes_demo-project-android.json contains the correct commit-SHA
cd ../demo-project-android
right_sha="$(git rev-parse HEAD)"
cd ../peass
test_sha=$(grep -A1 'versionChanges" : {' results/changes_demo-project-android.json | grep -v '"versionChanges' | grep -Po '"\K.*(?=")')

if [ "$right_sha" != "$test_sha" ]
then
    echo "commit-SHA is not equal to the SHA in changes_demo-project-android.json!"
    echo "Found commit-SHA: $right_sha"
    echo "Found SHA in json-file: $test_sha"
    exit 1
else
    echo "changes_demo-project-android.json contains the correct commit-SHA."
fi

# If minor updates to the project occur, the version name may change
version=$(cat results/execute_demo-project-android.json | grep '"testcases" :' -B 1 | head -n 1 | tr -d "\": {")
echo "Version: $version"

echo "::::::::::::::::::::SEARCHCAUSE:::::::::::::::::::::::::::::::::::::::"
./peass searchcause -iterations 5 -warmup 5 -repetitions 1 -vms 4 -version $version -test app§com.example.android_example.ExampleUnitTest\#test_TestMe -folder $DEMO_HOME -executionfile results/execute_demo-project-android.json

echo "::::::::::::::::::::VISUALIZERCA::::::::::::::::::::::::::::::::::::::"
./peass visualizerca -data ../demo-project-android_peass -propertyFolder results/properties_demo-project-android/

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
