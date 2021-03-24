if (document.getElementById('testcaseDiv') != null) 
   document.getElementById('testcaseDiv').innerHTML="Version: <a href='javascript:fallbackCopyTextToClipboard(\"-version 59da2816550c8e6419e55d8a6944fd90f761fada -test com.example.android_example.ExampleUnitTest#test_TestMe\")'>59da2816550c8e6419e55d8a6944fd90f761fada</a><br>Test Case: com.example.android_example.ExampleUnitTest#test_TestMe<br><a href='com.example.android_example.ExampleUnitTest_test_TestMe_dashboard.html?call=overall&ess=-1' target='parent'>Inspect Overall Measurement</a>";

var source = {"current":
{
 "com.example.android_example.ExampleUnitTest.test_TestMe_":
 `@Test
public void test_TestMe() {
    TestMe t = new TestMe();
    // t.test() always returns 1, test will always pass
    Assert.assertNotEquals(0, t.test());
}`,"com.example.android_example.TestMe.<init>_":
 ``,"com.example.android_example.TestMe.test_":
 `// will always return 1
public int test() {
    int tmp = 2;
    for (int i = 0; i < 70000000; i++) {
        tmp += i ^ i;
    }
    return tmp;
}`,},
"old":
{
 "com.example.android_example.ExampleUnitTest.test_TestMe_":
 `@Test
public void test_TestMe() {
    TestMe t = new TestMe();
    // t.test() always returns 1, test will always pass
    Assert.assertNotEquals(0, t.test());
}`,"com.example.android_example.TestMe.<init>_":
 ``,"com.example.android_example.TestMe.test_":
 `// will always return 1
public int test() {
    int tmp = 2;
    for (int i = 0; i < 10; i++) {
        tmp += i ^ i;
    }
    return tmp;
}`,},
};
var treeData = [
{
  "call" : "com.example.android_example.ExampleUnitTest#test_TestMe",
  "kiekerPattern" : "public void com.example.android_example.ExampleUnitTest.test_TestMe()",
  "otherKiekerPattern" : "public void com.example.android_example.ExampleUnitTest.test_TestMe()",
  "module" : "app",
  "name" : "ExampleUnitTest#test_TestMe",
  "key" : "com.example.android_example.ExampleUnitTest.test_TestMe_",
  "otherKey" : "com.example.android_example.ExampleUnitTest.test_TestMe_",
  "parent" : null,
  "color" : "#FF0000",
  "statistic" : {
    "meanOld" : 806.825,
    "meanCurrent" : 23326.35,
    "deviationOld" : 92.33953198206429,
    "deviationCurrent" : 88.33838350343494,
    "vms" : 4,
    "callsOld" : 20,
    "calls" : 20,
    "tvalue" : -352.44607859145964,
    "change" : true
  },
  "hasSourceChange" : false,
  "state" : "SLOWER",
  "inVMDeviationPredecessor" : 0.0,
  "inVMDeviation" : 0.0,
  "ess" : 0,
  "values" : [ 23423.6, 23375.7, 23233.4, 23272.7 ],
  "valuesPredecessor" : [ 749.1999999999999, 783.0000000000002, 751.6999999999999, 943.4000000000001 ],
  "vmValues" : {
    "values" : {
      "0" : [ {
        "mean" : 23423.6,
        "variance" : 1.3179092044444446E7,
        "n" : 5,
        "max" : 33257.0,
        "min" : 21543.0,
        "sum" : 117118.0,
        "standardDeviation" : 3630.301921940439
      } ],
      "1" : [ {
        "mean" : 23375.7,
        "variance" : 1.8194647566666678E7,
        "n" : 5,
        "max" : 35079.0,
        "min" : 21448.0,
        "sum" : 116878.5,
        "standardDeviation" : 4265.518440549364
      } ],
      "2" : [ {
        "mean" : 23233.4,
        "variance" : 1.4827081155555554E7,
        "n" : 5,
        "max" : 33883.0,
        "min" : 21436.0,
        "sum" : 116167.0,
        "standardDeviation" : 3850.594909303698
      } ],
      "3" : [ {
        "mean" : 23272.7,
        "variance" : 1.68596009E7,
        "n" : 5,
        "max" : 34735.0,
        "min" : 21479.0,
        "sum" : 116363.5,
        "standardDeviation" : 4106.044434732776
      } ]
    }
  },
  "vmValuesPredecessor" : {
    "values" : {
      "0" : [ {
        "mean" : 749.1999999999999,
        "variance" : 4777692.177777777,
        "n" : 5,
        "max" : 6970.0,
        "min" : 43.0,
        "sum" : 3745.9999999999995,
        "standardDeviation" : 2185.7932605298647
      } ],
      "1" : [ {
        "mean" : 783.0000000000002,
        "variance" : 5364829.555555556,
        "n" : 5,
        "max" : 7375.0,
        "min" : 37.0,
        "sum" : 3915.000000000001,
        "standardDeviation" : 2316.2101708514183
      } ],
      "2" : [ {
        "mean" : 751.6999999999999,
        "variance" : 5052601.788888888,
        "n" : 5,
        "max" : 7149.0,
        "min" : 29.0,
        "sum" : 3758.4999999999995,
        "standardDeviation" : 2247.7993213115997
      } ],
      "3" : [ {
        "mean" : 943.4000000000001,
        "variance" : 7960146.711111112,
        "n" : 5,
        "max" : 8973.0,
        "min" : 32.0,
        "sum" : 4717.0,
        "standardDeviation" : 2821.3731960006835
      } ]
    }
  },
  "children" : [ {
    "call" : "com.example.android_example.TestMe#<init>",
    "kiekerPattern" : "public new com.example.android_example.TestMe.<init>()",
    "otherKiekerPattern" : "public new com.example.android_example.TestMe.<init>()",
    "module" : "app",
    "name" : "TestMe#<init>",
    "key" : "com.example.android_example.TestMe.<init>_",
    "otherKey" : "com.example.android_example.TestMe.<init>_",
    "parent" : "com.example.android_example.ExampleUnitTest#test_TestMe",
    "color" : null,
    "statistic" : {
      "meanOld" : 1.6,
      "meanCurrent" : 1.325,
      "deviationOld" : 0.1414213562373096,
      "deviationCurrent" : 0.15000000000000002,
      "vms" : 4,
      "callsOld" : 20,
      "calls" : 20,
      "tvalue" : 2.667891875399663
    },
    "hasSourceChange" : false,
    "state" : null,
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "values" : [ 1.5, 1.4, 1.2, 1.2 ],
    "valuesPredecessor" : [ 1.7, 1.6, 1.4, 1.7000000000000004 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 1.5,
          "variance" : 9.166666666666668,
          "n" : 5,
          "max" : 10.0,
          "min" : 0.0,
          "sum" : 7.5,
          "standardDeviation" : 3.0276503540974917
        } ],
        "1" : [ {
          "mean" : 1.4,
          "variance" : 9.37777777777778,
          "n" : 5,
          "max" : 10.0,
          "min" : 0.0,
          "sum" : 7.0,
          "standardDeviation" : 3.062315754094894
        } ],
        "2" : [ {
          "mean" : 1.2,
          "variance" : 11.955555555555556,
          "n" : 5,
          "max" : 11.0,
          "min" : 0.0,
          "sum" : 6.0,
          "standardDeviation" : 3.457680661303984
        } ],
        "3" : [ {
          "mean" : 1.2,
          "variance" : 9.733333333333333,
          "n" : 5,
          "max" : 10.0,
          "min" : 0.0,
          "sum" : 6.0,
          "standardDeviation" : 3.119829055146024
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 1.7,
          "variance" : 8.67777777777778,
          "n" : 5,
          "max" : 10.0,
          "min" : 0.0,
          "sum" : 8.5,
          "standardDeviation" : 2.9458068127047605
        } ],
        "1" : [ {
          "mean" : 1.6,
          "variance" : 8.933333333333335,
          "n" : 5,
          "max" : 10.0,
          "min" : 0.0,
          "sum" : 8.0,
          "standardDeviation" : 2.988868236194653
        } ],
        "2" : [ {
          "mean" : 1.4,
          "variance" : 11.600000000000001,
          "n" : 5,
          "max" : 11.0,
          "min" : 0.0,
          "sum" : 7.0,
          "standardDeviation" : 3.4058772731852804
        } ],
        "3" : [ {
          "mean" : 1.7000000000000004,
          "variance" : 13.344444444444447,
          "n" : 5,
          "max" : 12.0,
          "min" : 0.0,
          "sum" : 8.500000000000002,
          "standardDeviation" : 3.6530048514126623
        } ]
      }
    },
    "children" : [ ]
  }, {
    "call" : "com.example.android_example.TestMe#test",
    "kiekerPattern" : "public int com.example.android_example.TestMe.test()",
    "otherKiekerPattern" : "public int com.example.android_example.TestMe.test()",
    "module" : "app",
    "name" : "TestMe#test",
    "key" : "com.example.android_example.TestMe.test_",
    "otherKey" : "com.example.android_example.TestMe.test_",
    "parent" : "com.example.android_example.ExampleUnitTest#test_TestMe",
    "color" : "#FF0000",
    "statistic" : {
      "meanOld" : 42.125,
      "meanCurrent" : 22548.425000000003,
      "deviationOld" : 5.288588343468102,
      "deviationCurrent" : 145.31986271669987,
      "vms" : 4,
      "callsOld" : 20,
      "calls" : 20,
      "tvalue" : -309.54351785199776,
      "change" : true
    },
    "hasSourceChange" : true,
    "state" : "SLOWER",
    "inVMDeviationPredecessor" : 0.0,
    "inVMDeviation" : 0.0,
    "ess" : 1,
    "values" : [ 22684.5, 22652.900000000005, 22478.1, 22378.2 ],
    "valuesPredecessor" : [ 38.599999999999994, 49.5, 38.0, 42.400000000000006 ],
    "vmValues" : {
      "values" : {
        "0" : [ {
          "mean" : 22684.5,
          "variance" : 2925940.055555554,
          "n" : 5,
          "max" : 26401.0,
          "min" : 21497.0,
          "sum" : 113422.5,
          "standardDeviation" : 1710.537943325302
        } ],
        "1" : [ {
          "mean" : 22652.900000000005,
          "variance" : 5186233.211111115,
          "n" : 5,
          "max" : 28299.0,
          "min" : 21417.0,
          "sum" : 113264.50000000003,
          "standardDeviation" : 2277.330281516301
        } ],
        "2" : [ {
          "mean" : 22478.1,
          "variance" : 2998402.9888888886,
          "n" : 5,
          "max" : 26683.0,
          "min" : 21405.0,
          "sum" : 112390.5,
          "standardDeviation" : 1731.589728800933
        } ],
        "3" : [ {
          "mean" : 22378.2,
          "variance" : 2392938.8444444444,
          "n" : 5,
          "max" : 26155.0,
          "min" : 21448.0,
          "sum" : 111891.0,
          "standardDeviation" : 1546.9126815836905
        } ]
      }
    },
    "vmValuesPredecessor" : {
      "values" : {
        "0" : [ {
          "mean" : 38.599999999999994,
          "variance" : 13072.71111111111,
          "n" : 5,
          "max" : 364.0,
          "min" : 2.0,
          "sum" : 192.99999999999997,
          "standardDeviation" : 114.33595720993073
        } ],
        "1" : [ {
          "mean" : 49.5,
          "variance" : 22774.72222222222,
          "n" : 5,
          "max" : 479.0,
          "min" : 1.0,
          "sum" : 247.5,
          "standardDeviation" : 150.91296240622347
        } ],
        "2" : [ {
          "mean" : 38.0,
          "variance" : 13608.000000000002,
          "n" : 5,
          "max" : 370.0,
          "min" : 1.0,
          "sum" : 190.0,
          "standardDeviation" : 116.6533325713415
        } ],
        "3" : [ {
          "mean" : 42.400000000000006,
          "variance" : 16773.82222222222,
          "n" : 5,
          "max" : 411.0,
          "min" : 1.0,
          "sum" : 212.00000000000003,
          "standardDeviation" : 129.51379162939452
        } ]
      }
    },
    "children" : [ ]
  } ]
}];
// ************** Generate the tree diagram   *****************
var margin = {top: 20, right: 120, bottom: 20, left: 270},
   width = 1000- margin.right - margin.left,
   height = 140 - margin.top - margin.bottom;
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
    "meanOld" : 91.41409999999999,
    "meanCurrent" : 21948.05715,
    "deviationOld" : 14.366711484075491,
    "deviationCurrent" : 269.8975580811548,
    "vms" : 4,
    "callsOld" : 20,
    "calls" : 20,
    "tvalue" : -161.7335400137778
  },
  "hasSourceChange" : false,
  "state" : null,
  "inVMDeviationPredecessor" : 0.0,
  "inVMDeviation" : 0.0,
  "ess" : 0,
  "values" : [ 21812.2078, 21886.2804, 21749.6038, 22344.1366 ],
  "valuesPredecessor" : [ 100.6304, 76.452, 82.1648, 106.4092 ],
  "vmValues" : {
    "values" : {
      "0" : [ {
        "mean" : 23681.271,
        "variance" : 0.0,
        "n" : 1,
        "max" : 23681.271,
        "min" : 23681.271,
        "sum" : 23681.271,
        "standardDeviation" : 0.0
      }, {
        "mean" : 21628.185,
        "variance" : 0.0,
        "n" : 1,
        "max" : 21628.185,
        "min" : 21628.185,
        "sum" : 21628.185,
        "standardDeviation" : 0.0
      }, {
        "mean" : 21721.775,
        "variance" : 0.0,
        "n" : 1,
        "max" : 21721.775,
        "min" : 21721.775,
        "sum" : 21721.775,
        "standardDeviation" : 0.0
      }, {
        "mean" : 22881.711,
        "variance" : 0.0,
        "n" : 1,
        "max" : 22881.711,
        "min" : 22881.711,
        "sum" : 22881.711,
        "standardDeviation" : 0.0
      }, {
        "mean" : 21807.741,
        "variance" : 0.0,
        "n" : 1,
        "max" : 21807.741,
        "min" : 21807.741,
        "sum" : 21807.741,
        "standardDeviation" : 0.0
      } ],
      "1" : [ {
        "mean" : 22070.904,
        "variance" : 0.0,
        "n" : 1,
        "max" : 22070.904,
        "min" : 22070.904,
        "sum" : 22070.904,
        "standardDeviation" : 0.0
      }, {
        "mean" : 21824.541,
        "variance" : 0.0,
        "n" : 1,
        "max" : 21824.541,
        "min" : 21824.541,
        "sum" : 21824.541,
        "standardDeviation" : 0.0
      }, {
        "mean" : 21518.987,
        "variance" : 0.0,
        "n" : 1,
        "max" : 21518.987,
        "min" : 21518.987,
        "sum" : 21518.987,
        "standardDeviation" : 0.0
      }, {
        "mean" : 21736.361,
        "variance" : 0.0,
        "n" : 1,
        "max" : 21736.361,
        "min" : 21736.361,
        "sum" : 21736.361,
        "standardDeviation" : 0.0
      }, {
        "mean" : 21597.226,
        "variance" : 0.0,
        "n" : 1,
        "max" : 21597.226,
        "min" : 21597.226,
        "sum" : 21597.226,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 22485.356,
        "variance" : 0.0,
        "n" : 1,
        "max" : 22485.356,
        "min" : 22485.356,
        "sum" : 22485.356,
        "standardDeviation" : 0.0
      }, {
        "mean" : 21489.57,
        "variance" : 0.0,
        "n" : 1,
        "max" : 21489.57,
        "min" : 21489.57,
        "sum" : 21489.57,
        "standardDeviation" : 0.0
      }, {
        "mean" : 21528.721,
        "variance" : 0.0,
        "n" : 1,
        "max" : 21528.721,
        "min" : 21528.721,
        "sum" : 21528.721,
        "standardDeviation" : 0.0
      }, {
        "mean" : 22466.712,
        "variance" : 0.0,
        "n" : 1,
        "max" : 22466.712,
        "min" : 22466.712,
        "sum" : 22466.712,
        "standardDeviation" : 0.0
      }, {
        "mean" : 21461.043,
        "variance" : 0.0,
        "n" : 1,
        "max" : 21461.043,
        "min" : 21461.043,
        "sum" : 21461.043,
        "standardDeviation" : 0.0
      } ],
      "3" : [ {
        "mean" : 22554.382,
        "variance" : 0.0,
        "n" : 1,
        "max" : 22554.382,
        "min" : 22554.382,
        "sum" : 22554.382,
        "standardDeviation" : 0.0
      }, {
        "mean" : 21565.688,
        "variance" : 0.0,
        "n" : 1,
        "max" : 21565.688,
        "min" : 21565.688,
        "sum" : 21565.688,
        "standardDeviation" : 0.0
      }, {
        "mean" : 21518.294,
        "variance" : 0.0,
        "n" : 1,
        "max" : 21518.294,
        "min" : 21518.294,
        "sum" : 21518.294,
        "standardDeviation" : 0.0
      }, {
        "mean" : 21719.962,
        "variance" : 0.0,
        "n" : 1,
        "max" : 21719.962,
        "min" : 21719.962,
        "sum" : 21719.962,
        "standardDeviation" : 0.0
      }, {
        "mean" : 21702.713,
        "variance" : 0.0,
        "n" : 1,
        "max" : 21702.713,
        "min" : 21702.713,
        "sum" : 21702.713,
        "standardDeviation" : 0.0
      } ]
    }
  },
  "vmValuesPredecessor" : {
    "values" : {
      "0" : [ {
        "mean" : 129.399,
        "variance" : 0.0,
        "n" : 1,
        "max" : 129.399,
        "min" : 129.399,
        "sum" : 129.399,
        "standardDeviation" : 0.0
      }, {
        "mean" : 93.9,
        "variance" : 0.0,
        "n" : 1,
        "max" : 93.9,
        "min" : 93.9,
        "sum" : 93.9,
        "standardDeviation" : 0.0
      }, {
        "mean" : 95.352,
        "variance" : 0.0,
        "n" : 1,
        "max" : 95.352,
        "min" : 95.352,
        "sum" : 95.352,
        "standardDeviation" : 0.0
      }, {
        "mean" : 114.764,
        "variance" : 0.0,
        "n" : 1,
        "max" : 114.764,
        "min" : 114.764,
        "sum" : 114.764,
        "standardDeviation" : 0.0
      }, {
        "mean" : 98.631,
        "variance" : 0.0,
        "n" : 1,
        "max" : 98.631,
        "min" : 98.631,
        "sum" : 98.631,
        "standardDeviation" : 0.0
      } ],
      "1" : [ {
        "mean" : 108.132,
        "variance" : 0.0,
        "n" : 1,
        "max" : 108.132,
        "min" : 108.132,
        "sum" : 108.132,
        "standardDeviation" : 0.0
      }, {
        "mean" : 62.813,
        "variance" : 0.0,
        "n" : 1,
        "max" : 62.813,
        "min" : 62.813,
        "sum" : 62.813,
        "standardDeviation" : 0.0
      }, {
        "mean" : 57.186,
        "variance" : 0.0,
        "n" : 1,
        "max" : 57.186,
        "min" : 57.186,
        "sum" : 57.186,
        "standardDeviation" : 0.0
      }, {
        "mean" : 93.73,
        "variance" : 0.0,
        "n" : 1,
        "max" : 93.73,
        "min" : 93.73,
        "sum" : 93.73,
        "standardDeviation" : 0.0
      }, {
        "mean" : 60.399,
        "variance" : 0.0,
        "n" : 1,
        "max" : 60.399,
        "min" : 60.399,
        "sum" : 60.399,
        "standardDeviation" : 0.0
      } ],
      "2" : [ {
        "mean" : 109.813,
        "variance" : 0.0,
        "n" : 1,
        "max" : 109.813,
        "min" : 109.813,
        "sum" : 109.813,
        "standardDeviation" : 0.0
      }, {
        "mean" : 80.307,
        "variance" : 0.0,
        "n" : 1,
        "max" : 80.307,
        "min" : 80.307,
        "sum" : 80.307,
        "standardDeviation" : 0.0
      }, {
        "mean" : 77.992,
        "variance" : 0.0,
        "n" : 1,
        "max" : 77.992,
        "min" : 77.992,
        "sum" : 77.992,
        "standardDeviation" : 0.0
      }, {
        "mean" : 79.82,
        "variance" : 0.0,
        "n" : 1,
        "max" : 79.82,
        "min" : 79.82,
        "sum" : 79.82,
        "standardDeviation" : 0.0
      }, {
        "mean" : 62.892,
        "variance" : 0.0,
        "n" : 1,
        "max" : 62.892,
        "min" : 62.892,
        "sum" : 62.892,
        "standardDeviation" : 0.0
      } ],
      "3" : [ {
        "mean" : 108.461,
        "variance" : 0.0,
        "n" : 1,
        "max" : 108.461,
        "min" : 108.461,
        "sum" : 108.461,
        "standardDeviation" : 0.0
      }, {
        "mean" : 73.107,
        "variance" : 0.0,
        "n" : 1,
        "max" : 73.107,
        "min" : 73.107,
        "sum" : 73.107,
        "standardDeviation" : 0.0
      }, {
        "mean" : 87.38,
        "variance" : 0.0,
        "n" : 1,
        "max" : 87.38,
        "min" : 87.38,
        "sum" : 87.38,
        "standardDeviation" : 0.0
      }, {
        "mean" : 105.415,
        "variance" : 0.0,
        "n" : 1,
        "max" : 105.415,
        "min" : 105.415,
        "sum" : 105.415,
        "standardDeviation" : 0.0
      }, {
        "mean" : 128.789,
        "variance" : 0.0,
        "n" : 1,
        "max" : 128.789,
        "min" : 128.789,
        "sum" : 128.789,
        "standardDeviation" : 0.0
      } ]
    }
  },
  "children" : [ ]
}];
