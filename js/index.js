// 已售出
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    //数据
    let data = [
        { "code": "600519", "stock": "麻辣烫", "fundPost": "21" },
        { "code": "000858", "stock": "汉堡", "fundPost": "19" },
        { "code": "002475", "stock": "烤鱼", "fundPost": "16" },
        { "code": "600276", "stock": "麻婆豆腐", "fundPost": "13" },
        { "code": "601318", "stock": "串串香", "fundPost": "9" },
    ]

    function contains(arr, dst) {
        var i = arr.length;
        while ((i -= 1)) {
            if (arr[i] == dst) {
                return i;
            }
        }
        return false;
    }


    var attackSourcesColor = [
        new echarts.graphic.LinearGradient(0, 1, 1, 1, [
            { offset: 0, color: "#EB3B5A" },
            { offset: 1, color: "#FE9C5A" }
        ]),
        new echarts.graphic.LinearGradient(0, 1, 1, 1, [
            { offset: 0, color: "#FA8231" },
            { offset: 1, color: "#FFD14C" }
        ]),
        new echarts.graphic.LinearGradient(0, 1, 1, 1, [
            { offset: 0, color: "#F7B731" },
            { offset: 1, color: "#FFEE96" }
        ]),
        new echarts.graphic.LinearGradient(0, 1, 1, 1, [
            { offset: 0, color: "#395CFE" },
            { offset: 1, color: "#2EC7CF" }
        ])
    ];
    var attackSourcesColor1 = [
        "#EB3B5A",
        "#FA8231",
        "#F7B731",
        "#3860FC",
        "#1089E7",
    ];
    var attaData = [];
    var attaName = [];
    var topName = []
    data.forEach((it, index) => {
        attaData[index] = parseFloat(it.fundPost);
        attaName[index] = it.stock;
        topName[index] = `${it.code} ${it.stock}`
    });
    var salvProMax = []; //背景按最大值
    for (let i = 0; i < attaData.length; i++) {
        salvProMax.push(attaData[0]);
    }

    function attackSourcesDataFmt(sData) {
        var sss = [];
        sData.forEach(function(item, i) {
            let itemStyle = {
                color: i > 3 ? attackSourcesColor[3] : attackSourcesColor[i]
            };
            sss.push({
                value: item,
                itemStyle: itemStyle
            });
        });
        return sss;
    }
    var option = {
        tooltip: {
            show: false,
            backgroundColor: "rgba(3,169,244, 0.5)", //背景颜色（此时为默认色）
            textStyle: {
                fontSize: 16
            }
        },
        color: ["#F7B731"],

        grid: {
            //进行配置
            left: "1%",
            right: "2%",
            width: "95%",
            bottom: "2%",
            top: "8%",
            containLabel: true
        },
        xAxis: {
            type: "value",

            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            }
        },
        yAxis: [{
                type: "category",
                inverse: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisPointer: {
                    label: {
                        show: true,
                        //margin: 30
                    }
                },
                pdaaing: [5, 0, 0, 0],
                postion: "right",
                data: attaName,
                axisLabel: {
                    margin: 30,
                    fontSize: 10,
                    align: "left",
                    padding: [2, 0, 0, 0],
                    color: "#000",
                    rich: {
                        nt1: {
                            color: "#fff",
                            backgroundColor: attackSourcesColor1[0],
                            width: 13,
                            height: 13,
                            fontSize: 10,
                            align: "center",
                            borderRadius: 100,
                            lineHeight: "5",
                            padding: [0, 1, 2, 1]
                                // padding:[0,0,2,0],
                        },
                        nt2: {
                            color: "#fff",
                            backgroundColor: attackSourcesColor1[1],
                            width: 13,
                            height: 13,
                            fontSize: 10,
                            align: "center",
                            borderRadius: 100,
                            padding: [0, 1, 2, 1]
                        },
                        nt3: {
                            color: "#fff",
                            backgroundColor: attackSourcesColor1[2],
                            width: 13,
                            height: 13,
                            fontSize: 10,
                            align: "center",
                            borderRadius: 100,
                            padding: [0, 1, 2, 1]
                        },
                        nt: {
                            color: "#fff",
                            backgroundColor: attackSourcesColor1[3],
                            width: 13,
                            height: 13,
                            fontSize: 10,
                            align: "center",
                            lineHeight: 3,
                            borderRadius: 100,
                            padding: [0, 1, 2, 1],
                            lineHeight: 5
                        }
                    },
                    formatter: function(value, index) {
                        index = contains(attaName, value) + 1;
                        if (index - 1 < 3) {
                            return ["{nt" + index + "|" + index + "}"].join("\n");
                        } else {
                            return ["{nt|" + index + "}"].join("\n");
                        }
                    }
                }
            },
            {
                type: "category",
                inverse: true,
                axisTick: "none",
                axisLine: "none",
                show: true,
                axisLabel: {
                    textStyle: {
                        color: "#fff",
                        fontSize: "10"
                    }
                },
                data: attackSourcesDataFmt(attaName)
            },
            { //名称
                type: 'category',
                offset: -10,
                position: "left",
                axisLabel: {
                    color: `#fff`,
                    fontSize: 10
                },
                axisLine: {
                    show: false
                },
                inverse: false,
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    color: ["#fff"],
                    align: "left",
                    verticalAlign: "bottom",
                    lineHeight: 30,
                    fontSize: 8
                },
                data: topName.stock
            },
        ],
        series: [{
                zlevel: 1,
                type: "bar",
                barWidth: "10px",
                animationDuration: 1500,
                data: attackSourcesDataFmt(attaData),
                align: "center",
                itemStyle: {
                    normal: {
                        barBorderRadius: 10
                    }
                },
                label: {
                    show: true,
                    fontSize: 10,
                    color: "#fff",
                    textBorderWidth: 2,
                    padding: [2, 0, 0, 0]
                }
            },
            {
                type: "bar",
                barWidth: 10,
                barGap: "-100%",
                margin: "20",
                data: salvProMax,
                textStyle: {
                    //图例文字的样式
                    fontSize: 10,
                    color: "#fff"
                },
                itemStyle: {
                    normal: {
                        color: "#05325F",
                        //width:"100%",
                        fontSize: 10,
                        barBorderRadius: 30
                    },
                }
            }
        ]
    };
    // 把配置给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();
// 人气推荐
(function() {
    var myChart = echarts.init(document.querySelector('.line .chart'));
    const originData = [
        { name: '人工智能', value: 1228 },
        { name: '大数据', value: 981 },
        { name: '云计算', value: 363 },
        { name: '5G', value: 361 },
        { name: '通讯', value: 291 },
        { name: '互联网', value: 289 },
        { name: '技术', value: 211 },
        { name: '全球', value: 208 },
        { name: '数据挖掘', value: 177 },
        { name: 'Java', value: 135 },
        { name: 'Python', value: 129 },
        { name: '数据采集', value: 107 },
        { name: '数据分析', value: 96 },
        { name: '科技', value: 86 },
        { name: '数据存储', value: 80 },
        { name: 'R', value: 76 },
        { name: 'Spring', value: 75 },
        { name: 'C', value: 69 },
        { name: 'C++', value: 66 },
        { name: 'Dubbo', value: 62 },
        { name: 'Linux', value: 51 },
        { name: 'Flink', value: 49 },
        { name: 'Spark', value: 44 },
        { name: 'Zookeeper', value: 43 },
        { name: 'Sqoop', value: 41 },
        { name: 'Hive', value: 40 },
        { name: 'Pig', value: 38 },
        { name: 'HBase', value: 38 },
        { name: '数据科学', value: 36 },
        { name: 'Flume', value: 36 },
        { name: 'Kafaka', value: 34 },
        { name: '数据', value: 33 },
        { name: '分部式', value: 31 },
        { name: '集群', value: 31 },
        { name: 'Maven', value: 30 },
        { name: 'SQL', value: 29 },
        { name: 'Mysql', value: 29 },
        { name: 'MongoDB', value: 29 },
        { name: 'Redis', value: 28 },
        { name: 'Android', value: 27 },
        { name: 'Kotlin', value: 26 },
        { name: 'XML', value: 25 },
        { name: '爬虫', value: 22 },
        { name: 'C#', value: 21 },
        { name: 'HTTP', value: 21 },
        { name: 'Centos', value: 20 },
        { name: 'Ubuntu', value: 20 },
        { name: 'TCP', value: 19 },
        { name: '阿里', value: 19 },
        { name: '京东', value: 18 },
        { name: '拼多多', value: 18 },
        { name: '字节跳动', value: 18 },
        { name: '美团', value: 18 },
        { name: '腾讯', value: 18 },
        { name: '无人驾驶', value: 17 },
        { name: '计算机视觉', value: 17 },
        { name: '机器学习', value: 35 },
        { name: '统计分析', value: 17 },
        { name: '算法', value: 17 },
        { name: '数据结构', value: 16 },
        { name: 'Idea', value: 16 },
        { name: 'vscode', value: 16 },
        { name: 'MVC', value: 16 },
        { name: 'JavaWeb', value: 16 },
        { name: '服务器', value: 16 },
        { name: '流量', value: 15 },
        { name: '数据处理', value: 15 },
        { name: '数据清洗', value: 15 },
        { name: '数据可视化', value: 15 },
        { name: 'Data', value: 15 },
        { name: '新技术', value: 14 },
        { name: '架构', value: 14 },
        { name: '工程师', value: 14 },
        { name: '计算机科学', value: 13 },
        { name: '软件工程', value: 13 },
        { name: '网络工程', value: 13 },
        { name: '物联网工程', value: 12 },
        { name: '大数据的奥秘', value: 13 },
        { name: '云', value: 13 },
        { name: '设计模式', value: 13 },
        { name: 'PHP', value: 13 },
        { name: 'Django', value: 13 },
        { name: 'Go', value: 13 },
        { name: 'Jsp', value: 12 },
        { name: 'Scala', value: 12 },
        { name: 'Perl', value: 12 },
        { name: 'Ruby', value: 12 },
        { name: 'Docker', value: 12 },
        { name: 'JSON', value: 12 },
        { name: 'Angular', value: 12 },
        { name: 'React', value: 11 },
        { name: 'jQuery', value: 11 },
        { name: 'Node.Js', value: 11 },
        { name: 'Vue', value: 11 },
        { name: 'Bootstrap', value: 11 },
        { name: 'Css', value: 11 },
        { name: 'Html', value: 11 },
        { name: 'TypeScript', value: 10 },
        { name: 'JavaScript', value: 10 },
        { name: 'Git', value: 10 }
    ];
    const data = originData.map(val => ({
        ...val,
        textStyle: {
            normal: {
                color: randomColor()
            }
        }
    }));

    myChart.setOption({
        series: [{
            type: 'wordCloud',
            shape: 'circle',
            left: 'center',
            top: 'center',
            width: '70%',
            height: '80%',
            right: null,
            bottom: null,
            sizeRange: [12, 60],
            rotationRange: [0, 0], //字符横向
            rotationStep: 45,
            gridSize: 8,
            drawOutOfBound: false,
            textStyle: {
                normal: {
                    fontFamily: 'sans-serif',
                    fontWeight: 'normal'
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: 'white'
                }
            },
            data
        }]
    });

    function randomColor() {
        return 'rgb(' + [
            Math.round(Math.random() * 200),
            Math.round(Math.random() * 200),
            Math.round(Math.random() * 200)
        ].join(',') + ')';
    }
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();
//饼图 今天吃什么
(function() {
    // 基于准备好的dom，初始化echarts实例
    var total = 0
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    data = [
        { value: 1, name: "小米饭" },
        { value: 4, name: "包子" },
        { value: 2, name: "回锅肉" },
        { value: 2, name: "清蒸鸡" },
        { value: 1, name: "烤鱼" }
    ]
    console.log(total)
    data.forEach((res) => {
        total += res.value
    })
    option = {
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position: function(p) {
                //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            }
        },
        legend: {
            top: "90%",
            itemWidth: 10,
            itemHeight: 10,
            data: ["小米饭", "包子", "回锅肉", "清蒸鸡", "烤鱼"],
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        toolbar: {
            show: true,
            formatter: '{b} </br> {c}人 </br> 占比{d}%'
        },
        graphic: {
            type: 'text', // [ default: image ]用 setOption 首次设定图形元素时必须指定。image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,
            top: '40%', // 描述怎么根据父元素进行定位。top 和 bottom 只有一个可以生效。如果指定 top 或 bottom，则 shape 里的 y、cy 等定位属性不再生效。『父元素』是指：如果是顶层元素，父元素是 echarts 图表容器。如果是 group 的子元素，父元素就是 group 元素。
            left: 'center',
            style: {
                text: total, // 文本块文字。可以使用 \n 来换行。[ default: '' ]
                fill: '#fff', // 填充色。
                fontSize: 17,
                fontWeight: 'bold' // 文字字体的粗细，可选'normal'，'bold'，'bolder'，'lighter'
            }
        },
        series: [{
            name: "吃什么",
            type: "pie",
            center: ["50%", "42%"],
            radius: ["40%", "60%"],
            color: [
                "#5470c6",
                "#91cc75",
                "#fac858",
                "#ee6666",
                "#73c0de",
                "#3ba272",
                "#fc8452",
                "#9a60b4",
                "#ea7ccc"
            ],
            label: {
                normal: {
                    show: true,
                    position: 'outside',
                    formatter: '{b}' + '-' + '{d}%',
                    function() {
                        return total
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 6
                }
            },
            data: data
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

//今日Top
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".bar1 .chart"));

    var data = [70, 34, 60, 78, 69];
    var titlename = ["HTML5", "CSS3", "javascript", "VUE", "NODE"];
    var valdata = [702, 350, 610, 793, 664];
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    option = {
        //图标位置
        grid: {
            top: "10%",
            left: "22%",
            bottom: "10%"
        },
        xAxis: {
            show: false
        },
        yAxis: [{
                show: true,
                data: titlename,
                inverse: true,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "#fff",

                    rich: {
                        lg: {
                            color: "#fff",
                            borderRadius: 15,
                            // padding: 5,
                            align: "center",
                            width: 15,
                            height: 15
                        }
                    }
                }
            },
            {
                show: true,
                inverse: true,
                data: valdata,
                axisLabel: {
                    textStyle: {
                        fontSize: 12,
                        color: "#fff"
                    }
                }
            }
        ],
        series: [{
                name: "条",
                type: "bar",
                yAxisIndex: 0,
                data: data,
                barCategoryGap: 50,
                barWidth: 10,
                itemStyle: {
                    normal: {
                        barBorderRadius: 20,
                        color: function(params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex % num];
                        }
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: "inside",
                        formatter: "{c}%"
                    }
                }
            },
            {
                name: "框",
                type: "bar",
                yAxisIndex: 1,
                barCategoryGap: 50,
                data: [100, 100, 100, 100, 100],
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: "none",
                        borderColor: "#00c1de",
                        borderWidth: 3,
                        barBorderRadius: 15
                    }
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();
// 折线图 优秀作品


// 点位分布统计模块
(function() {
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".pie1  .chart"));
    // 2. 指定配置项和数据
    var option = {
        legend: {
            top: "90%",
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // 注意颜色写的位置
        color: [
            "#006cff",
            "#60cda0",
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
            "#32c5e9",
            "#1d9dff"
        ],
        series: [{
            name: "点位统计",
            type: "pie",
            // 如果radius是百分比则必须加引号
            radius: ["10%", "70%"],
            center: ["50%", "42%"],
            roseType: "radius",
            data: [
                { value: 20, name: "云南" },
                { value: 26, name: "北京" },
                { value: 24, name: "山东" },
                { value: 25, name: "河北" },
                { value: 20, name: "江苏" },
                { value: 25, name: "浙江" },
                { value: 30, name: "深圳" },
                { value: 42, name: "广东" }
            ],
            // 修饰饼形图文字相关的样式 label对象
            label: {
                fontSize: 10
            },
            // 修饰引导线样式
            labelLine: {
                // 连接到图形的线长度
                length: 10,
                // 连接到文字的线长度
                length2: 10
            }
        }]
    };

    // 3. 配置项和数据给我们的实例化对象
    myChart.setOption(option);
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();