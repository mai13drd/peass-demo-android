# PeASS Demo for Android

This demo shows how to detect a simple performance change and its cause by [PeASS](https://github.com/DaGeRe/peass). In contrast to [peass-demo](https://github.com/DaGeRe/peass-demo), the `peass-demo-android` demonstrates the use of PeASS for an android-project built with gradle. The `demo-project-android` contains three versions, where `ExampleTest` creates an instance of `ExampleClazz` and calls its method `calleeMethod`. This method calls `Callee.method1` which calls `Callee.innerMethod` which contains a `Thread.sleep`. In the 3rd version c4c7ac5, `Callee.innerMethod` contains a longer call to `Thread.sleep` than before. Therefore, performance gets worse in this version.

If you just want to see the results, you can also immediately open `example_results/peass/results/c4c7ac55f0b519bbe0df2e4f4a9d90e88285bfd0/app§de.dagere.peass.ExampleTest_test.html`.

## Prerequisites

In current development state, it is recommended to use the latest development version of PeASS. The following commands require (at least) installed OpenJDK 8, maven and tar and have been tried on Ubuntu 18.04 and 20.04.

For installing the latest development version of PeASS run `git clone https://github.com/DaGeRe/peass.git && cd peass && mvn clean install` inside the `peass-demo-android`-folder in order to clone and build PeASS (optionally add `-DskipTests` to the `mvn`-call to speed up building).

To get the example running, untar the example project using `tar -xvf demo-project-android.tar.xz` (which is a git project itself and is therefore managed inside this repo as tar). For the following commands, we assume that you are in the peass-folder and that the `demo-project-android` is in the folder one level above.

So you should got:

* peass-demo-android/peass

* peass-demo-android/demo-project-android

* peass-demo-android/demo-project-android.tar.xz

and than run `cd peass`.

## Executing the Regression Test Selection

Run `./peass select -folder ../demo-project-android/` (takes ~1 minute). After the selection, you'll find `results/execute_demo-project-android.json`, an executionfile for the project, which specifies which tests could have changed performance based on source code analysis.

## Executing the Measurement and Getting the Changes

Run `./peass measure -executionfile results/execute_demo-project-android.json -folder ../demo-project-android/  -vms 5 -iterations 5 -warmup 5 -repetitions 5` in order to obtain performance measurements. For real examples, higher execution times are needed, but for the demo case, this is sufficient.

Afterwards, run `./peass getchanges -data ../demo-project-android_peass/ -dependencyfile results/deps_demo-project-android.json` (takes ~1 second) in order to identify the changes. Now in `results/changes_demo-project-android.json`, all changes are listed. As expected, c4c7ac55f0b519bbe0df2e4f4a9d90e88285bfd0 contains a change in `ExampleTest.test`.

## Executing the Root Cause Analysis

Execute `./peass searchcause -vms 3 -iterations 5 -warmup 1 -repetitions 5 -version c4c7ac55f0b519bbe0df2e4f4a9d90e88285bfd0 -test app§de.dagere.peass.ExampleTest\#test -folder ../demo-project-android/ -executionfile results/execute_demo-project-android.json` (takes some time) in order to get changes.

To finally get the root cause analysis visualization, run `./peass visualizerca -data ../demo-project-android_peass/ -propertyFolder results/properties_demo-project-android/`.
Now, `results/c4c7ac55f0b519bbe0df2e4f4a9d90e88285bfd0` contains the file `app§de.dagere.peass.ExampleTest_test.html` which you can visualize in your browser. You'll see that *ExampleTest#test*, *ExampleClazz#calleeMethod*, *Callee#method1* and *Callee#innerMethod* are red - therefore, all these have gotten slower and *Callee#innerMethod* is very likely the root cause of the performance change.

## Use the provided shell-script
Instead of running each above step on its own, you can also run `executeAll.sh`. This will execute the described steps and also test some of the results for correctness.

## Spotting Bugs

In case any step did not work, you can check whether the results (both in `demo-project-android_peass`, mostly results for potential remote execution and debugging, and in `peass/results`, mostly results which are relevant to the developer) look correct. If this does not work, do not hesitate to contact the maintainer.
