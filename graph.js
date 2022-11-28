import { ResponsiveSunburst } from '@nivo/sunburst';

function MyResponsiveSunburst() {

    var data = {
        "name": "nivo",
        "color": "hsl(288, 70%, 50%)",
        "children": [
            {
                "name": "viz",
                "color": "hsl(339, 70%, 50%)",
                "children": [
                    {
                        "name": "stack",
                        "color": "hsl(23, 70%, 50%)",
                        "children": [
                            {
                                "name": "cchart",
                                "color": "hsl(339, 70%, 50%)",
                                "loc": 52186
                            },
                            {
                                "name": "xAxis",
                                "color": "hsl(234, 70%, 50%)",
                                "loc": 136989
                            },
                            {
                                "name": "yAxis",
                                "color": "hsl(16, 70%, 50%)",
                                "loc": 41285
                            },
                            {
                                "name": "layers",
                                "color": "hsl(323, 70%, 50%)",
                                "loc": 77684
                            }
                        ]
                    },
                    {
                        "name": "ppie",
                        "color": "hsl(347, 70%, 50%)",
                        "children": [
                            {
                                "name": "chart",
                                "color": "hsl(45, 70%, 50%)",
                                "children": [
                                    {
                                        "name": "pie",
                                        "color": "hsl(100, 70%, 50%)",
                                        "children": [
                                            {
                                                "name": "outline",
                                                "color": "hsl(248, 70%, 50%)",
                                                "loc": 152370
                                            },
                                            {
                                                "name": "slices",
                                                "color": "hsl(314, 70%, 50%)",
                                                "loc": 44876
                                            },
                                            {
                                                "name": "bbox",
                                                "color": "hsl(180, 70%, 50%)",
                                                "loc": 77879
                                            }
                                        ]
                                    },
                                    {
                                        "name": "donut",
                                        "color": "hsl(164, 70%, 50%)",
                                        "loc": 150720
                                    },
                                    {
                                        "name": "gauge",
                                        "color": "hsl(161, 70%, 50%)",
                                        "loc": 41770
                                    }
                                ]
                            },
                            {
                                "name": "legends",
                                "color": "hsl(284, 70%, 50%)",
                                "loc": 133940
                            }
                        ]
                    }
                ]
            },
            {
                "name": "colors",
                "color": "hsl(260, 70%, 50%)",
                "children": [
                    {
                        "name": "rgb",
                        "color": "hsl(250, 70%, 50%)",
                        "loc": 170844
                    },
                    {
                        "name": "hsl",
                        "color": "hsl(116, 70%, 50%)",
                        "loc": 23471
                    }
                ]
            },
            {
                "name": "utils",
                "color": "hsl(228, 70%, 50%)",
                "children": [
                    {
                        "name": "randomize",
                        "color": "hsl(121, 70%, 50%)",
                        "loc": 106450
                    },
                    {
                        "name": "resetClock",
                        "color": "hsl(326, 70%, 50%)",
                        "loc": 118649
                    },
                    {
                        "name": "noop",
                        "color": "hsl(244, 70%, 50%)",
                        "loc": 149714
                    },
                    {
                        "name": "tick",
                        "color": "hsl(99, 70%, 50%)",
                        "loc": 89835
                    },
                    {
                        "name": "forceGC",
                        "color": "hsl(223, 70%, 50%)",
                        "loc": 52007
                    },
                    {
                        "name": "stackTrace",
                        "color": "hsl(67, 70%, 50%)",
                        "loc": 59728
                    },
                    {
                        "name": "dbg",
                        "color": "hsl(10, 70%, 50%)",
                        "loc": 107437
                    }
                ]
            },
            {
                "name": "generators",
                "color": "hsl(254, 70%, 50%)",
                "children": [
                    {
                        "name": "address",
                        "color": "hsl(78, 70%, 50%)",
                        "loc": 59463
                    },
                    {
                        "name": "city",
                        "color": "hsl(27, 70%, 50%)",
                        "loc": 7943
                    },
                    {
                        "name": "animal",
                        "color": "hsl(258, 70%, 50%)",
                        "loc": 129742
                    },
                    {
                        "name": "movie",
                        "color": "hsl(106, 70%, 50%)",
                        "loc": 149289
                    },
                    {
                        "name": "user",
                        "color": "hsl(296, 70%, 50%)",
                        "loc": 27071
                    }
                ]
            },
            {
                "name": "set",
                "color": "hsl(347, 70%, 50%)",
                "children": [
                    {
                        "name": "clone",
                        "color": "hsl(245, 70%, 50%)",
                        "loc": 135316
                    },
                    {
                        "name": "intersect",
                        "color": "hsl(86, 70%, 50%)",
                        "loc": 42806
                    },
                    {
                        "name": "merge",
                        "color": "hsl(1, 70%, 50%)",
                        "loc": 127220
                    },
                    {
                        "name": "reverse",
                        "color": "hsl(271, 70%, 50%)",
                        "loc": 85250
                    },
                    {
                        "name": "toArray",
                        "color": "hsl(95, 70%, 50%)",
                        "loc": 12405
                    },
                    {
                        "name": "toObject",
                        "color": "hsl(68, 70%, 50%)",
                        "loc": 185864
                    },
                    {
                        "name": "fromCSV",
                        "color": "hsl(211, 70%, 50%)",
                        "loc": 43361
                    },
                    {
                        "name": "slice",
                        "color": "hsl(354, 70%, 50%)",
                        "loc": 44132
                    },
                    {
                        "name": "append",
                        "color": "hsl(168, 70%, 50%)",
                        "loc": 137056
                    },
                    {
                        "name": "prepend",
                        "color": "hsl(167, 70%, 50%)",
                        "loc": 162497
                    },
                    {
                        "name": "shuffle",
                        "color": "hsl(108, 70%, 50%)",
                        "loc": 109954
                    },
                    {
                        "name": "pick",
                        "color": "hsl(27, 70%, 50%)",
                        "loc": 28858
                    },
                    {
                        "name": "plouc",
                        "color": "hsl(300, 70%, 50%)",
                        "loc": 51416
                    }
                ]
            },
            {
                "name": "text",
                "color": "hsl(83, 70%, 50%)",
                "children": [
                    {
                        "name": "trim",
                        "color": "hsl(331, 70%, 50%)",
                        "loc": 128612
                    },
                    {
                        "name": "slugify",
                        "color": "hsl(49, 70%, 50%)",
                        "loc": 50556
                    },
                    {
                        "name": "snakeCase",
                        "color": "hsl(90, 70%, 50%)",
                        "loc": 140450
                    },
                    {
                        "name": "camelCase",
                        "color": "hsl(110, 70%, 50%)",
                        "loc": 192011
                    },
                    {
                        "name": "repeat",
                        "color": "hsl(198, 70%, 50%)",
                        "loc": 16497
                    },
                    {
                        "name": "padLeft",
                        "color": "hsl(75, 70%, 50%)",
                        "loc": 122888
                    },
                    {
                        "name": "padRight",
                        "color": "hsl(30, 70%, 50%)",
                        "loc": 2084
                    },
                    {
                        "name": "sanitize",
                        "color": "hsl(20, 70%, 50%)",
                        "loc": 183587
                    },
                    {
                        "name": "ploucify",
                        "color": "hsl(140, 70%, 50%)",
                        "loc": 34901
                    }
                ]
            },
            {
                "name": "misc",
                "color": "hsl(312, 70%, 50%)",
                "children": [
                    {
                        "name": "greetings",
                        "color": "hsl(101, 70%, 50%)",
                        "children": [
                            {
                                "name": "hey",
                                "color": "hsl(190, 70%, 50%)",
                                "loc": 30912
                            },
                            {
                                "name": "HOWDY",
                                "color": "hsl(229, 70%, 50%)",
                                "loc": 2446
                            },
                            {
                                "name": "aloha",
                                "color": "hsl(93, 70%, 50%)",
                                "loc": 42063
                            },
                            {
                                "name": "AHOY",
                                "color": "hsl(313, 70%, 50%)",
                                "loc": 65370
                            }
                        ]
                    },
                    {
                        "name": "other",
                        "color": "hsl(300, 70%, 50%)",
                        "loc": 171294
                    },
                    {
                        "name": "path",
                        "color": "hsl(11, 70%, 50%)",
                        "children": [
                            {
                                "name": "pathA",
                                "color": "hsl(74, 70%, 50%)",
                                "loc": 132090
                            },
                            {
                                "name": "pathB",
                                "color": "hsl(115, 70%, 50%)",
                                "children": [
                                    {
                                        "name": "pathB1",
                                        "color": "hsl(307, 70%, 50%)",
                                        "loc": 4728
                                    },
                                    {
                                        "name": "pathB2",
                                        "color": "hsl(26, 70%, 50%)",
                                        "loc": 31903
                                    },
                                    {
                                        "name": "pathB3",
                                        "color": "hsl(162, 70%, 50%)",
                                        "loc": 189881
                                    },
                                    {
                                        "name": "pathB4",
                                        "color": "hsl(274, 70%, 50%)",
                                        "loc": 158863
                                    }
                                ]
                            },
                            {
                                "name": "pathC",
                                "color": "hsl(274, 70%, 50%)",
                                "children": [
                                    {
                                        "name": "pathC1",
                                        "color": "hsl(315, 70%, 50%)",
                                        "loc": 77738
                                    },
                                    {
                                        "name": "pathC2",
                                        "color": "hsl(154, 70%, 50%)",
                                        "loc": 150083
                                    },
                                    {
                                        "name": "pathC3",
                                        "color": "hsl(300, 70%, 50%)",
                                        "loc": 152013
                                    },
                                    {
                                        "name": "pathC4",
                                        "color": "hsl(91, 70%, 50%)",
                                        "loc": 61861
                                    },
                                    {
                                        "name": "pathC5",
                                        "color": "hsl(311, 70%, 50%)",
                                        "loc": 53101
                                    },
                                    {
                                        "name": "pathC6",
                                        "color": "hsl(285, 70%, 50%)",
                                        "loc": 171002
                                    },
                                    {
                                        "name": "pathC7",
                                        "color": "hsl(235, 70%, 50%)",
                                        "loc": 40750
                                    },
                                    {
                                        "name": "pathC8",
                                        "color": "hsl(28, 70%, 50%)",
                                        "loc": 141583
                                    },
                                    {
                                        "name": "pathC9",
                                        "color": "hsl(182, 70%, 50%)",
                                        "loc": 124555
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };

    const MyResponsiveSunburst = ({data}) => (
        <ResponsiveSunburst
            data={data}
            margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
            id="name"
            value="loc"
            cornerRadius={2}
            borderColor={{ theme: 'background' }}
            colors={{ scheme: 'paired' }}
            childColor={{
                from: 'color',
                modifiers: [
                    [
                        'brighter',
                        0.2
                    ]
                ]
            }}
            enableArcLabels={true}
            arcLabelsSkipAngle={12}
            arcLabelsTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        30.0
                    ]
                ]
            }}
        />
    )
}

export default MyResponsiveSunburst;