# PeASS Demo for Android

This demo shows how to detect a simple performance change and its cause by PeASS. In contrast to `peass-demo`, the `peass-demo-android` demonstrates the use of PeASS for a project built with android. The `demo-project-android` contains two versions, where `ExampleUnitTest` calls `TestMe`. In the 2nd version 7675e29a, `TestMe#test` contains an increased number of additions to the variable `tmp` than before. Therefore, performance gets worse in this version.

## Prerequisites

In current development state, it is recommended to use the latest development version of PeASS. The following commands require (at least) installed OpenJDK 8, maven, android and tar and have been tried on Ubuntu 18.04 and 20.04.

For installing the latest development version of PeASS, first install the current latest development version of KoPeMe (`git clone https://github.com/DaGeRe/kopeme.git && cd kopeme && git checkout develop && mvn clean install`). Afterwards, install PeASS itself by running `git clone https://github.com/DaGeRe/peass.git && cd peass && mvn clean install` in order to clone and build PeASS (optionally add `-DskipTests=true` to the `mvn`-calls to speed up building).

Optionally, you can now get autocompletion in bash by running `. peass_completion` (in the peass-folder).

To get the example running, untar the example project using `tar -xvf demo-project-android.tar.xz` (which is a git project itself and is therefore managed inside this repo as tar). For the following commands, we assume that you are in the peass-folder and that the demo-project-android is in the folder one level above. So you should got:

kopeme  
peass  
peass-demo-android/demo-project-android  
peass-demo-android/demo-project-android.tar.xz

and than run cd peass.

## Executing the Regression Test Selection

Run `./peass select -folder ../peass-demo-android/demo-project-android/` (takes some time). After the selection, you'll find in `results/execute_demo-project-android.json` an executionfile for the project, which specifies which tests could have changed performance based on source code analysis.

## Executing the Measurement and Getting the Changes

Run `./peass measure -executionfile results/execute_demo-project-android.json -folder ../peass-demo-android/demo-project-android/ -iterations 20 -warmup 20 -repetitions 10 -vms 4` (takes some time) in order to obtain performance measurements. For real examples, higher execution times are needed, but for the demo case, this is sufficient.

Afterwards, run `./peass getchanges -data ../peass-demo-android/demo-project-android_peass/ -dependencyfile results/deps_demo-project-android.json` (takes ~1 second) in order to identify the changes. Now in `results/changes_demo-project-android.json`, all changes are listed. As expected, 59da2816550c8e6419e55d8a6944fd90f761fada contains a change in the test test_TestMe.

## Executing the Root Cause Analysis

Execute `./peass searchcause -iterations 20 -warmup 20 -repetitions 10 -vms 4 -version 59da2816550c8e6419e55d8a6944fd90f761fada -test app§com.example.android_example.ExampleUnitTest\#test_TestMe -folder ../peass-demo-android/demo-project-android/ -executionfile results/execute_demo-project-android.json` (takes some time) in order to get changes.

To finally get the root cause analysis visualization, run `./peass visualizerca -data ../peass-demo-android/demo-project-android_peass/ -propertyFolder results/properties_demo-project-android/`. Now, results/59da2816550c8e6419e55d8a6944fd90f761fada contains the file app$com.example.android_example.ExampleUnitTest_test_TestMe.html which you can visualize in your browser. You'll see that ExampleUnitTest#test_TestMe and TestMe#test are red - therefore, both have gotten slower and TestMe#test is very likely the root cause of the performance change.

## Spotting Bugs

In case any step did not work, you can check whether the results (both in `demo-project-android_peass`, mostly results for potential remote execution and debugging, and in `results`, mostly results which are relevant to the developer) look correct. If this does not work, do not hesitate to contact the maintainer. 
