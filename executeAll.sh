#!/bin/bash
set -e

ANDROID_SDK_ROOT=$ANDROID_SDK_ROOT
if [ -z "$ANDROID_SDK_ROOT" ]
	then
		echo "ANDROID_SDK_ROOT is not set!"
		exit 1
	else
		echo "ANDROID_SDK_ROOT: $ANDROID_SDK_ROOT"
fi

tar -xf demo-project-android.tar.xz
git clone https://github.com/DaGeRe/peass.git && \
	cd peass && \
	DEMO_HOME=$(pwd)/../demo-project-android && \
	mvn clean install -DskipTests=true -V

# It is assumed that $DEMO_HOME is set correctly and PeASS has been built!
echo ":::::::::::::::::::::SELECT:::::::::::::::::::::::::::::::::::::::::::"
./peass select -folder $DEMO_HOME

echo ":::::::::::::::::::::MEASURE::::::::::::::::::::::::::::::::::::::::::"
./peass measure -executionfile results/execute_demo-project-android.json -folder $DEMO_HOME -iterations 5 -warmup 5 -repetitions 1 -vms 2

echo "::::::::::::::::::::GETCHANGES::::::::::::::::::::::::::::::::::::::::"
./peass getchanges -data ../demo-project-android_peass/ -dependencyfile results/deps_demo-project-android.json

# If minor updates to the project occur, the version name may change
version=$(cat results/execute_demo-project-android.json | grep "versions" -A 1 | grep -v "version" | tr -d "\": {")
echo "Version: $version"

echo "::::::::::::::::::::SEARCHCAUSE:::::::::::::::::::::::::::::::::::::::"
./peass searchcause -iterations 5 -warmup 5 -repetitions 1 -vms 2 -version $version -test app§com.example.android_example.ExampleUnitTest\#test_TestMe -folder $DEMO_HOME -executionfile results/execute_demo-project-android.json

echo "::::::::::::::::::::VISUALIZERCA::::::::::::::::::::::::::::::::::::::"
./peass visualizerca -data ../demo-project-android_peass -propertyFolder results/properties_demo-project-android/

echo "::::::::::::::::changes_android-example-correct.json::::::::::::::::::"
cat results/changes_demo-project-android.json

echo "::::::::::::::::::::android-example-correct.json::::::::::::::::::::::"
cat results/statistics/demo-project-android.json

echo
echo

#Check, if changes_demo-project-android.json contains the correct commit-SHA
cd ../demo-project-android
right_sha="$(git rev-parse HEAD)"
cd ../peass
(
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
) && true

if [ $? -ne 0 ]
	then exit 1
fi

#Check, if a slowdown is detected for App#test
(
	state=$(grep -A21 '"call" : "com.example.android_example.TestMe#test",' results/$version/com.example.android_example.ExampleUnitTest_test_TestMe.js | grep '"state" : "SLOWER",' | grep -o 'SLOWER')
	if [ "$state" != "SLOWER" ]
		then
			echo "State for TestMe#test in com.example.android_example.ExampleUnitTest_test_TestMe.js has not the expected value SLOWER!"
			echo "Found value for state: $state"
			echo ":::::::::::::::::::ExampleUnitTest_test_TestMe.js:::::::::::::::::::::"
			cat results/$version/com.example.android_example.ExampleUnitTest_test_TestMe.js
			exit 1
		else
			echo "Slowdown is detected for TestMe#test."
	fi
) && true
