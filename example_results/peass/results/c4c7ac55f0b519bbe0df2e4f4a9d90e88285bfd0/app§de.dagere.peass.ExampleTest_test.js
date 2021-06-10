if (document.getElementById('testcaseDiv') != null) 
   document.getElementById('testcaseDiv').innerHTML="Version: <a href='javascript:fallbackCopyTextToClipboard(\"-version c4c7ac55f0b519bbe0df2e4f4a9d90e88285bfd0 -test de.dagere.peass.ExampleTest#test\")'>c4c7ac55f0b519bbe0df2e4f4a9d90e88285bfd0</a><br>Test Case: de.dagere.peass.ExampleTest#test<br><a href='de.dagere.peass.ExampleTest_test_dashboard.html?call=overall&ess=-1' target='parent'>Inspect Overall Measurement</a>";

var source = {"current":
{
 "de.dagere.peass.ExampleClazz.<init>_":
 ``,"de.dagere.peass.ExampleClazz.calleeMethod_":
 `protected void calleeMethod() {
    new Callee().method1();
}`,"de.dagere.peass.Callee.<init>_":
 ``,"de.dagere.peass.Callee.innerMethod_":
 `private void innerMethod() {
    try {
        Thread.sleep(20);
    } catch (final InterruptedException e) {
        e.printStackTrace();
    }
}`,"de.dagere.peass.ExampleTest.test_":
 `@Test
public void test() {
    final ExampleClazz exampleClazz = new ExampleClazz();
    exampleClazz.calleeMethod();
    assertNotNull(exampleClazz);
}`,"de.dagere.peass.Callee.method1_":
 `protected void method1() {
    innerMethod();
}`,},
"old":
{
 "de.dagere.peass.ExampleClazz.<init>_":
 ``,"de.dagere.peass.ExampleClazz.calleeMethod_":
 `protected void calleeMethod() {
    new Callee().method1();
}`,"de.dagere.peass.Callee.<init>_":
 ``,"de.dagere.peass.Callee.innerMethod_":
 `private void innerMethod() {
    try {
        Thread.sleep(1);
    } catch (final InterruptedException e) {
        e.printStackTrace();
    }
}`,"de.dagere.peass.ExampleTest.test_":
 `@Test
public void test() {
    final ExampleClazz exampleClazz = new ExampleClazz();
    exampleClazz.calleeMethod();
    assertNotNull(exampleClazz);
}`,"de.dagere.peass.Callee.method1_":
 `protected void method1() {
    innerMethod();
}`,},
};
var treeData = [
{
  "call" : "de.dagere.peass.ExampleTest#test",
  "kiekerPattern" : "public void de.dagere.peass.ExampleTest.test()",
  "otherKiekerPattern" : "public void de.dagere.peass.ExampleTest.test()",
  "module" : "app",
  "name" : "ExampleTest#test",
  "key" : "de.dagere.peass.ExampleTest.test_",
  "otherKey" : "de.dagere.peass.ExampleTest.test_",
  "parent" : null,
  "color" : "#FF0000",
  "statistic" : {
    "meanOld" : 1335.0777777777776,
    "meanCurrent" : 20653.199999999997,
    "deviationOld" : 144.90220968077176,
    "deviationCurrent" : 68.73857076715511,
    "vms" : 3,
    "callsOld" : 435,
    "calls" : 435,
    "tvalue" : -208.6297302429755,
    "change" : true
  },
  "hasSourceChange" : false,
  "state" : "SLOWER",
  "inVMDeviationPredecessor" : 0.0,
  "inVMDeviation" : 0.0,
  "ess" : 0,
  "values" : [ 20574.6, 20702.066666666662, 20682.933333333338 ],
  "valuesPredecessor" : [ 1502.3666666666666, 1254.1666666666665, 1248.7 ],
  "vmValues" : {
    "values" : {
      "0" : [ {
        "mean" : 20574.6,
        "variance" : 61494.24827586189,
        "n" : 145,
        "max" : 21787.0,
        "min" : 20379.0,
        "sum" : 2983317.0,
        "standardDeviation" : 247.98033848646529
      } ],
      "1" : [ {
        "mean" : 20702.066666666662,
        "variance" : 1074281.6505747114,
        "n" : 145,
        "max" : 26164.0,
        "min" : 20354.0,
        "sum" : 3001799.666666666,
        "standardDeviation" : 1036.4755909208434
      } ],
      "2" : [ {
        "mean" : 20682.933333333338,
        "variance" : 579953.2367816112,
        "n" : 145,
        "max" : 24624.0,
        "min" : 20345.0,
        "sum" : 2999025.333333334,
        "standardDeviation" : 761.5466084105498
      } ]
    }
  },
  "vmValuesPredecessor" : {
    "values" : {
      "0" : [ {
        "mean" : 1502.3666666666666,
        "variance" : 573269.6885057472,
        "n" : 145,
        "max" : 5499.0,
        "min" : 1259.0,
        "sum" : 217843.16666666666,
        "standardDeviation" : 757.1457511640326
      } ],
      "1" : [ {
        "mean" : 1254.1666666666665,
        "variance" : 44492.695402298814,
        "n" : 145,
        "max" : 2308.0,
        "min" : 1127.0,
        "sum" : 181854.16666666666,
        "standardDeviation" : 210.93291682973242
      } ],
      "2" : [ {
        "mean" : 1248.7,
        "variance" : 120187.87241379307,
        "n" : 145,
        "max" : 3070.0,
        "min" : 1127.0,
        "sum" : 181061.5,
        "standardDeviation" : 346.6812259321134
      } ]
    }
  },
  "children" : [ {
    "call" : "de.dagere.peass.ExampleClazz#<init>",
    "kiekerPattern" : "public new de.dagere.peass.ExampleClazz.<init>()",
    "otherKiekerPattern" : "public new de.dagere.peass.ExampleClazz.<init>()",
    "module" : "app",
    "name" : "ExampleClazz#<init>",
    "key" : "de.dagere.peass.ExampleClazz.<init>_",
    "otherKey" : "de.dagere.peass.ExampleClazz.<init>_",
    "parent" : "de.dagere.peass.ExampleTest#test",
    "color" : null,
    "statistic" : {
      "meanOld" : 0.5888888888888889,
      "meanCurrent" : 1.3222222222222222,
      "deviationOld" : 0.7690783324743203,
      "deviationCurrent" : 0.3671713698190733,
      "vms" : 3,
      "callsOld" : 435,
      "calls" : 435,
      "tvalue" : -1.4904078821845785
    },
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "values" : [ 0.9666666666666667, 1.2999999999999998, 1.6999999999999997 ],
    "valuesPredecessor" : [ 1.4666666666666666, 0.03333333333333335, 0.26666666666666666 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 0.9666666666666667,
          "variance" : 0.7229885057471265,
          "n" : 145,
          "max" : 2.0,
          "min" : 0.0,
          "sum" : 140.16666666666666,
          "standardDeviation" : 0.8502873077655143
        } ],
        "1" : [ {
          "mean" : 1.2999999999999998,
          "variance" : 3.803448275862068,
          "n" : 145,
          "max" : 10.0,
          "min" : 0.0,
          "sum" : 188.49999999999997,
          "standardDeviation" : 1.9502431324996552
        } ],
        "2" : [ {
          "mean" : 1.6999999999999997,
          "variance" : 2.286206896551723,
          "n" : 145,
          "max" : 6.0,
          "min" : 0.0,
          "sum" : 246.49999999999997,
          "standardDeviation" : 1.5120207989811922
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 1.4666666666666666,
          "variance" : 1.636781609195402,
          "n" : 145,
          "max" : 6.0,
          "min" : 0.0,
          "sum" : 212.66666666666666,
          "standardDeviation" : 1.2793676598989838
        } ],
        "1" : [ {
          "mean" : 0.03333333333333335,
          "variance" : 0.033333333333333326,
          "n" : 145,
          "max" : 1.0,
          "min" : 0.0,
          "sum" : 4.833333333333336,
          "standardDeviation" : 0.18257418583505536
        } ],
        "2" : [ {
          "mean" : 0.26666666666666666,
          "variance" : 0.2712643678160919,
          "n" : 145,
          "max" : 2.0,
          "min" : 0.0,
          "sum" : 38.666666666666664,
          "standardDeviation" : 0.5208304597621878
        } ]
      }
    },
    "children" : [ ]
  }, {
    "call" : "de.dagere.peass.ExampleClazz#calleeMethod",
    "kiekerPattern" : "protected void de.dagere.peass.ExampleClazz.calleeMethod()",
    "otherKiekerPattern" : "protected void de.dagere.peass.ExampleClazz.calleeMethod()",
    "module" : "app",
    "name" : "ExampleClazz#calleeMethod",
    "key" : "de.dagere.peass.ExampleClazz.calleeMethod_",
    "otherKey" : "de.dagere.peass.ExampleClazz.calleeMethod_",
    "parent" : "de.dagere.peass.ExampleTest#test",
    "color" : "#FF0000",
    "statistic" : {
      "meanOld" : 1237.1777777777777,
      "meanCurrent" : 20471.833333333332,
      "deviationOld" : 84.71824107221752,
      "deviationCurrent" : 17.85257528886647,
      "vms" : 3,
      "callsOld" : 435,
      "calls" : 435,
      "tvalue" : -384.7984367819223,
      "change" : true
    },
    "hasSourceChange" : false,
    "state" : "SLOWER",
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "values" : [ 20451.366666666658, 20484.200000000004, 20479.93333333333 ],
    "valuesPredecessor" : [ 1334.5666666666666, 1196.4666666666667, 1180.5 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 20451.366666666658,
          "variance" : 8793.205747125994,
          "n" : 145,
          "max" : 20788.0,
          "min" : 20325.0,
          "sum" : 2965448.1666666656,
          "standardDeviation" : 93.77209471439781
        } ],
        "1" : [ {
          "mean" : 20484.200000000004,
          "variance" : 169668.16551724222,
          "n" : 145,
          "max" : 22632.0,
          "min" : 20300.0,
          "sum" : 2970209.0000000005,
          "standardDeviation" : 411.90795757941146
        } ],
        "2" : [ {
          "mean" : 20479.93333333333,
          "variance" : 82429.65057471239,
          "n" : 145,
          "max" : 21894.0,
          "min" : 20277.0,
          "sum" : 2969590.333333333,
          "standardDeviation" : 287.10564357865275
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 1334.5666666666666,
          "variance" : 98358.87471264365,
          "n" : 145,
          "max" : 2980.0,
          "min" : 1208.0,
          "sum" : 193512.16666666666,
          "standardDeviation" : 313.6221846627621
        } ],
        "1" : [ {
          "mean" : 1196.4666666666667,
          "variance" : 8576.809195402291,
          "n" : 145,
          "max" : 1533.0,
          "min" : 1104.0,
          "sum" : 173487.66666666666,
          "standardDeviation" : 92.61106410900531
        } ],
        "2" : [ {
          "mean" : 1180.5,
          "variance" : 27575.775862068942,
          "n" : 145,
          "max" : 2042.0,
          "min" : 1106.0,
          "sum" : 171172.5,
          "standardDeviation" : 166.05955516641896
        } ]
      }
    },
    "children" : [ {
      "call" : "de.dagere.peass.Callee#<init>",
      "kiekerPattern" : "public new de.dagere.peass.Callee.<init>()",
      "otherKiekerPattern" : "public new de.dagere.peass.Callee.<init>()",
      "module" : "app",
      "name" : "Callee#<init>",
      "key" : "de.dagere.peass.Callee.<init>_",
      "otherKey" : "de.dagere.peass.Callee.<init>_",
      "parent" : "de.dagere.peass.ExampleClazz#calleeMethod",
      "color" : null,
      "statistic" : {
        "meanOld" : 0.5555555555555555,
        "meanCurrent" : 1.3888888888888886,
        "deviationOld" : 0.6866450913546832,
        "deviationCurrent" : 0.2714842605082359,
        "vms" : 3,
        "callsOld" : 435,
        "calls" : 435,
        "tvalue" : -1.9548226317850759
      },
      "hasSourceChange" : false,
      "state" : null,
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "values" : [ 1.2666666666666666, 1.1999999999999997, 1.6999999999999997 ],
      "valuesPredecessor" : [ 1.333333333333333, 0.03333333333333335, 0.29999999999999993 ],
      "vmValues" : {
        "values" : {
          "0" : [ {
            "mean" : 1.2666666666666666,
            "variance" : 5.3747126436781585,
            "n" : 145,
            "max" : 13.0,
            "min" : 0.0,
            "sum" : 183.66666666666666,
            "standardDeviation" : 2.318342650187448
          } ],
          "1" : [ {
            "mean" : 1.1999999999999997,
            "variance" : 4.096551724137931,
            "n" : 145,
            "max" : 8.0,
            "min" : 0.0,
            "sum" : 173.99999999999997,
            "standardDeviation" : 2.023994002989616
          } ],
          "2" : [ {
            "mean" : 1.6999999999999997,
            "variance" : 2.699999999999999,
            "n" : 145,
            "max" : 5.0,
            "min" : 0.0,
            "sum" : 246.49999999999997,
            "standardDeviation" : 1.643167672515498
          } ]
        }
      },
      "vmValuesPredecessor" : {
        "values" : {
          "0" : [ {
            "mean" : 1.333333333333333,
            "variance" : 1.4022988505747125,
            "n" : 145,
            "max" : 5.0,
            "min" : 0.0,
            "sum" : 193.3333333333333,
            "standardDeviation" : 1.1841869998335197
          } ],
          "1" : [ {
            "mean" : 0.03333333333333335,
            "variance" : 0.033333333333333326,
            "n" : 145,
            "max" : 1.0,
            "min" : 0.0,
            "sum" : 4.833333333333336,
            "standardDeviation" : 0.18257418583505536
          } ],
          "2" : [ {
            "mean" : 0.29999999999999993,
            "variance" : 0.6310344827586208,
            "n" : 145,
            "max" : 4.0,
            "min" : 0.0,
            "sum" : 43.49999999999999,
            "standardDeviation" : 0.7943767889097848
          } ]
        }
      },
      "children" : [ ]
    }, {
      "call" : "de.dagere.peass.Callee#method1",
      "kiekerPattern" : "protected void de.dagere.peass.Callee.method1()",
      "otherKiekerPattern" : "protected void de.dagere.peass.Callee.method1()",
      "module" : "app",
      "name" : "Callee#method1",
      "key" : "de.dagere.peass.Callee.method1_",
      "otherKey" : "de.dagere.peass.Callee.method1_",
      "parent" : "de.dagere.peass.ExampleClazz#calleeMethod",
      "color" : "#FF0000",
      "statistic" : {
        "meanOld" : 1154.8,
        "meanCurrent" : 20333.822222222225,
        "deviationOld" : 38.09922717209782,
        "deviationCurrent" : 16.51344009296113,
        "vms" : 3,
        "callsOld" : 435,
        "calls" : 435,
        "tvalue" : -799.9956497938249,
        "change" : true
      },
      "hasSourceChange" : false,
      "state" : "SLOWER",
      "inVMDeviationPredecessor" : 0.0,
      "inVMDeviation" : 0.0,
      "ess" : 2,
      "values" : [ 20351.400000000005, 20318.63333333333, 20331.433333333338 ],
      "valuesPredecessor" : [ 1194.6, 1151.1333333333334, 1118.6666666666665 ],
      "vmValues" : {
        "values" : {
          "0" : [ {
            "mean" : 20351.400000000005,
            "variance" : 3018.800000000073,
            "n" : 145,
            "max" : 20499.0,
            "min" : 20217.0,
            "sum" : 2950953.000000001,
            "standardDeviation" : 54.943607453461524
          } ],
          "1" : [ {
            "mean" : 20318.63333333333,
            "variance" : 2812.585057471201,
            "n" : 145,
            "max" : 20454.0,
            "min" : 20224.0,
            "sum" : 2946201.833333333,
            "standardDeviation" : 53.03381051245706
          } ],
          "2" : [ {
            "mean" : 20331.433333333338,
            "variance" : 4295.426436781719,
            "n" : 145,
            "max" : 20554.0,
            "min" : 20229.0,
            "sum" : 2948057.833333334,
            "standardDeviation" : 65.53950287255556
          } ]
        }
      },
      "vmValuesPredecessor" : {
        "values" : {
          "0" : [ {
            "mean" : 1194.6,
            "variance" : 613.1448275862074,
            "n" : 145,
            "max" : 1256.0,
            "min" : 1157.0,
            "sum" : 173217.0,
            "standardDeviation" : 24.76176139910502
          } ],
          "1" : [ {
            "mean" : 1151.1333333333334,
            "variance" : 4066.8781609195457,
            "n" : 145,
            "max" : 1280.0,
            "min" : 1081.0,
            "sum" : 166914.33333333334,
            "standardDeviation" : 63.77207979139104
          } ],
          "2" : [ {
            "mean" : 1118.6666666666665,
            "variance" : 853.471264367816,
            "n" : 145,
            "max" : 1189.0,
            "min" : 1087.0,
            "sum" : 162206.66666666666,
            "standardDeviation" : 29.2142305113076
          } ]
        }
      },
      "children" : [ {
        "call" : "de.dagere.peass.Callee#innerMethod",
        "kiekerPattern" : "private void de.dagere.peass.Callee.innerMethod()",
        "otherKiekerPattern" : "private void de.dagere.peass.Callee.innerMethod()",
        "module" : "app",
        "name" : "Callee#innerMethod",
        "key" : "de.dagere.peass.Callee.innerMethod_",
        "otherKey" : "de.dagere.peass.Callee.innerMethod_",
        "parent" : "de.dagere.peass.Callee#method1",
        "color" : "#FF0000",
        "statistic" : {
          "meanOld" : 1095.8777777777777,
          "meanCurrent" : 20152.666666666664,
          "deviationOld" : 20.883601576711087,
          "deviationCurrent" : 11.763550106625729,
          "vms" : 3,
          "callsOld" : 435,
          "calls" : 435,
          "tvalue" : -1377.0924393408918,
          "change" : true
        },
        "hasSourceChange" : true,
        "state" : "SLOWER",
        "inVMDeviationPredecessor" : 0.0,
        "inVMDeviation" : 0.0,
        "ess" : 3,
        "values" : [ 20166.23333333333, 20145.299999999996, 20146.466666666667 ],
        "valuesPredecessor" : [ 1116.6999999999998, 1096.0, 1074.9333333333334 ],
        "vmValues" : {
          "values" : {
            "0" : [ {
              "mean" : 20166.23333333333,
              "variance" : 431.0126436781607,
              "n" : 145,
              "max" : 20199.0,
              "min" : 20118.0,
              "sum" : 2924103.833333333,
              "standardDeviation" : 20.760844002066985
            } ],
            "1" : [ {
              "mean" : 20145.299999999996,
              "variance" : 472.4241379310028,
              "n" : 145,
              "max" : 20191.0,
              "min" : 20113.0,
              "sum" : 2921068.4999999995,
              "standardDeviation" : 21.735320055867657
            } ],
            "2" : [ {
              "mean" : 20146.466666666667,
              "variance" : 557.9816091953852,
              "n" : 145,
              "max" : 20188.0,
              "min" : 20091.0,
              "sum" : 2921237.6666666665,
              "standardDeviation" : 23.621634346407642
            } ]
          }
        },
        "vmValuesPredecessor" : {
          "values" : {
            "0" : [ {
              "mean" : 1116.6999999999998,
              "variance" : 134.49310344827566,
              "n" : 145,
              "max" : 1149.0,
              "min" : 1093.0,
              "sum" : 161921.49999999997,
              "standardDeviation" : 11.597116169474015
            } ],
            "1" : [ {
              "mean" : 1096.0,
              "variance" : 1137.793103448275,
              "n" : 145,
              "max" : 1164.0,
              "min" : 1060.0,
              "sum" : 158920.0,
              "standardDeviation" : 33.731188882816966
            } ],
            "2" : [ {
              "mean" : 1074.9333333333334,
              "variance" : 133.65057471264353,
              "n" : 145,
              "max" : 1109.0,
              "min" : 1062.0,
              "sum" : 155865.33333333334,
              "standardDeviation" : 11.560734177060016
            } ]
          }
        },
        "children" : [ ]
      } ]
    } ]
  } ]
}];
// ************** Generate the tree diagram   *****************
var margin = {top: 20, right: 120, bottom: 20, left: 160},
   width = 1500- margin.right - margin.left,
   height = 175 - margin.top - margin.bottom;
var kopemeData = [
{
  "call" : "overall",
  "kiekerPattern" : "public overall.overall()",
  "otherKiekerPattern" : "public overall.overall()",
  "module" : null,
  "name" : null,
  "key" : "overall.overall_",
  "otherKey" : "overall.overall_",
  "parent" : null,
  "color" : null,
  "statistic" : {
    "meanOld" : 1357.0237466666665,
    "meanCurrent" : 20745.532346666667,
    "deviationOld" : 142.78166636466662,
    "deviationCurrent" : 32.65244778475957,
    "vms" : 3,
    "callsOld" : 15,
    "calls" : 15,
    "tvalue" : -229.27841705975925
  },
  "hasSourceChange" : false,
  "state" : null,
  "inVMDeviationPredecessor" : 0.0,
  "inVMDeviation" : 0.0,
  "ess" : 0,
  "values" : [ 20722.00544, 20782.8114, 20731.7802 ],
  "valuesPredecessor" : [ 1298.24308, 1253.0153199999997, 1519.81284 ],
  "vmValues" : {
    "values" : {
      "0" : [ {
        "mean" : 20749.496600000002,
        "variance" : 0.0,
        "n" : 5,
        "max" : 20749.496600000002,
        "min" : 20749.496600000002,
        "sum" : 103747.48300000001,
        "standardDeviation" : 0.0
      }, {
        "mean" : 20761.6152,
        "variance" : 0.0,
        "n" : 5,
        "max" : 20761.6152,
        "min" : 20761.6152,
        "sum" : 103808.076,
        "standardDeviation" : 0.0
      }, {
        "mean" : 20929.0586,
        "variance" : 0.0,
        "n" : 5,
        "max" : 20929.0586,
        "min" : 20929.0586,
        "sum" : 104645.293,
        "standardDeviation" : 0.0
      }, {
        "mean" : 20620.9392,
        "variance" : 0.0,
        "n" : 5,
        "max" : 20620.9392,
        "min" : 20620.9392,
        "sum" : 103104.696,
        "standardDeviation" : 0.0
      }, {
        "mean" : 20597.7914,
        "variance" : 0.0,
        "n" : 5,
        "max" : 20597.7914,
        "min" : 20597.7914,
        "sum" : 102988.957,
        "standardDeviation" : 0.0
      } ],
      "1" : [ {
        "mean" : 20806.7332,
        "variance" : 0.0,
        "n" : 5,
        "max" : 20806.7332,
        "min" : 20806.7332,
        "sum" : 104033.666,
        "standardDeviation" : 0.0
      }, {
        "mean" : 20740.943600000002,
        "variance" : 0.0,
        "n" : 5,
        "max" : 20740.943600000002,
        "min" : 20740.943600000002,
        "sum" : 103704.71800000001,
        "standardDeviation" : 0.0
      }, {
        "mean" : 20896.712399999997,
        "variance" : 0.0,
        "n" : 5,
        "max" : 20896.712399999997,
        "min" : 20896.712399999997,
        "sum" : 104483.56199999998,
        "standardDeviation" : 0.0
      }, {
        "mean" : 20647.3508,
        "variance" : 0.0,
        "n" : 5,
        "max" : 20647.3508,
        "min" : 20647.3508,
        "sum" : 103236.754,
        "standardDeviation" : 0.0
      }, {
        "mean" : 20518.2872,
        "variance" : 0.0,
        "n" : 5,
        "max" : 20518.2872,
        "min" : 20518.2872,
        "sum" : 102591.43599999999,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 21038.491,
        "variance" : 0.0,
        "n" : 5,
        "max" : 21038.491,
        "min" : 21038.491,
        "sum" : 105192.45500000002,
        "standardDeviation" : 0.0
      }, {
        "mean" : 20739.9502,
        "variance" : 0.0,
        "n" : 5,
        "max" : 20739.9502,
        "min" : 20739.9502,
        "sum" : 103699.75099999999,
        "standardDeviation" : 0.0
      }, {
        "mean" : 20992.855399999997,
        "variance" : 0.0,
        "n" : 5,
        "max" : 20992.855399999997,
        "min" : 20992.855399999997,
        "sum" : 104964.27699999999,
        "standardDeviation" : 0.0
      }, {
        "mean" : 20570.578,
        "variance" : 0.0,
        "n" : 5,
        "max" : 20570.578,
        "min" : 20570.578,
        "sum" : 102852.89000000001,
        "standardDeviation" : 0.0
      }, {
        "mean" : 20572.182399999998,
        "variance" : 0.0,
        "n" : 5,
        "max" : 20572.182399999998,
        "min" : 20572.182399999998,
        "sum" : 102860.91199999998,
        "standardDeviation" : 0.0
      } ]
    }
  },
  "vmValuesPredecessor" : {
    "values" : {
      "0" : [ {
        "mean" : 1554.5813999999998,
        "variance" : 0.0,
        "n" : 5,
        "max" : 1554.5813999999998,
        "min" : 1554.5813999999998,
        "sum" : 7772.906999999999,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1511.6334,
        "variance" : 0.0,
        "n" : 5,
        "max" : 1511.6334,
        "min" : 1511.6334,
        "sum" : 7558.1669999999995,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1709.704,
        "variance" : 0.0,
        "n" : 5,
        "max" : 1709.704,
        "min" : 1709.704,
        "sum" : 8548.52,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1420.023,
        "variance" : 0.0,
        "n" : 5,
        "max" : 1420.023,
        "min" : 1420.023,
        "sum" : 7100.115,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1403.1224,
        "variance" : 0.0,
        "n" : 5,
        "max" : 1403.1224,
        "min" : 1403.1224,
        "sum" : 7015.612,
        "standardDeviation" : 0.0
      } ],
      "1" : [ {
        "mean" : 1196.8096,
        "variance" : 0.0,
        "n" : 5,
        "max" : 1196.8096,
        "min" : 1196.8096,
        "sum" : 5984.048000000001,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1188.4258,
        "variance" : 0.0,
        "n" : 5,
        "max" : 1188.4258,
        "min" : 1188.4258,
        "sum" : 5942.129,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1447.72,
        "variance" : 0.0,
        "n" : 5,
        "max" : 1447.72,
        "min" : 1447.72,
        "sum" : 7238.6,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1331.889,
        "variance" : 0.0,
        "n" : 5,
        "max" : 1331.889,
        "min" : 1331.889,
        "sum" : 6659.445,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1326.371,
        "variance" : 0.0,
        "n" : 5,
        "max" : 1326.371,
        "min" : 1326.371,
        "sum" : 6631.8550000000005,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 1256.3946,
        "variance" : 0.0,
        "n" : 5,
        "max" : 1256.3946,
        "min" : 1256.3946,
        "sum" : 6281.973,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1260.0728000000001,
        "variance" : 0.0,
        "n" : 5,
        "max" : 1260.0728000000001,
        "min" : 1260.0728000000001,
        "sum" : 6300.3640000000005,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1360.7108,
        "variance" : 0.0,
        "n" : 5,
        "max" : 1360.7108,
        "min" : 1360.7108,
        "sum" : 6803.554,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1216.6028000000001,
        "variance" : 0.0,
        "n" : 5,
        "max" : 1216.6028000000001,
        "min" : 1216.6028000000001,
        "sum" : 6083.014000000001,
        "standardDeviation" : 0.0
      }, {
        "mean" : 1171.2956000000001,
        "variance" : 0.0,
        "n" : 5,
        "max" : 1171.2956000000001,
        "min" : 1171.2956000000001,
        "sum" : 5856.478000000001,
        "standardDeviation" : 0.0
      } ]
    }
  },
  "children" : [ ]
}];
