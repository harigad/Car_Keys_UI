(function() {
    "use strict";
    var root = this, previous = root.Chart;
    var Chart = function(context) {
        this.canvas = context.canvas;
        this.ctx = context;
        this.width = context.canvas.width;
        this.height = context.canvas.height;
        this.aspectRatio = this.width / this.height;
        helpers.retinaScale(this);
        return this;
    };
    Chart.defaults = {
        global: {
            animation: true,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            showScale: true,
            scaleOverride: false,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: true,
            scaleLabel: "<%=value%>",
            scaleIntegersOnly: true,
            scaleBeginAtZero: false,
            scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            responsive: false,
            showTooltips: true,
            tooltipEvents: [ "mousemove", "touchstart", "touchmove", "mouseout" ],
            tooltipFillColor: "rgba(0,0,0,0.8)",
            tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipFontSize: 14,
            tooltipFontStyle: "normal",
            tooltipFontColor: "#fff",
            tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipTitleFontSize: 14,
            tooltipTitleFontStyle: "bold",
            tooltipTitleFontColor: "#fff",
            tooltipYPadding: 6,
            tooltipXPadding: 6,
            tooltipCaretSize: 8,
            tooltipCornerRadius: 6,
            tooltipXOffset: 10,
            tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
            multiTooltipTemplate: "<%= value %>",
            multiTooltipKeyBackground: "#fff",
            onAnimationProgress: function() {},
            onAnimationComplete: function() {}
        }
    };
    Chart.types = {};
    var helpers = Chart.helpers = {};
    var each = helpers.each = function(loopable, callback, self) {
        var additionalArgs = Array.prototype.slice.call(arguments, 3);
        if (loopable) if (loopable.length === +loopable.length) {
            var i;
            for (i = 0; loopable.length > i; i++) callback.apply(self, [ loopable[i], i ].concat(additionalArgs));
        } else for (var item in loopable) callback.apply(self, [ loopable[item], item ].concat(additionalArgs));
    }, clone = helpers.clone = function(obj) {
        var objClone = {};
        each(obj, function(value, key) {
            obj.hasOwnProperty(key) && (objClone[key] = value);
        });
        return objClone;
    }, extend = helpers.extend = function(base) {
        each(Array.prototype.slice.call(arguments, 1), function(extensionObject) {
            each(extensionObject, function(value, key) {
                extensionObject.hasOwnProperty(key) && (base[key] = value);
            });
        });
        return base;
    }, merge = helpers.merge = function() {
        var args = Array.prototype.slice.call(arguments, 0);
        args.unshift({});
        return extend.apply(null, args);
    }, indexOf = helpers.indexOf = function(arrayToSearch, item) {
        if (Array.prototype.indexOf) return arrayToSearch.indexOf(item);
        for (var i = 0; arrayToSearch.length > i; i++) if (arrayToSearch[i] === item) return i;
        return -1;
    }, inherits = helpers.inherits = function(extensions) {
        var parent = this;
        var ChartElement = extensions && extensions.hasOwnProperty("constructor") ? extensions.constructor : function() {
            return parent.apply(this, arguments);
        };
        var Surrogate = function() {
            this.constructor = ChartElement;
        };
        Surrogate.prototype = parent.prototype;
        ChartElement.prototype = new Surrogate();
        ChartElement.extend = inherits;
        extensions && extend(ChartElement.prototype, extensions);
        ChartElement.__super__ = parent.prototype;
        return ChartElement;
    }, noop = helpers.noop = function() {}, uid = helpers.uid = function() {
        var id = 0;
        return function() {
            return "chart-" + id++;
        };
    }(), warn = helpers.warn = function(str) {
        window.console && "function" == typeof window.console.warn && console.warn(str);
    }, amd = helpers.amd = "function" == typeof root.define && root.define.amd, isNumber = helpers.isNumber = function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }, max = helpers.max = function(array) {
        return Math.max.apply(Math, array);
    }, min = helpers.min = function(array) {
        return Math.min.apply(Math, array);
    }, getDecimalPlaces = (helpers.cap = function(valueToCap, maxValue, minValue) {
        if (isNumber(maxValue)) {
            if (valueToCap > maxValue) return maxValue;
        } else if (isNumber(minValue) && minValue > valueToCap) return minValue;
        return valueToCap;
    }, helpers.getDecimalPlaces = function(num) {
        return 0 !== num % 1 && isNumber(num) ? num.toString().split(".")[1].length : 0;
    }), toRadians = helpers.radians = function(degrees) {
        return degrees * (Math.PI / 180);
    }, aliasPixel = (helpers.getAngleFromPoint = function(centrePoint, anglePoint) {
        var distanceFromXCenter = anglePoint.x - centrePoint.x, distanceFromYCenter = anglePoint.y - centrePoint.y, radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
        var angle = 2 * Math.PI + Math.atan2(distanceFromYCenter, distanceFromXCenter);
        0 > distanceFromXCenter && 0 > distanceFromYCenter && (angle += 2 * Math.PI);
        return {
            angle: angle,
            distance: radialDistanceFromCenter
        };
    }, helpers.aliasPixel = function(pixelWidth) {
        return 0 === pixelWidth % 2 ? 0 : .5;
    }), calculateOrderOfMagnitude = (helpers.splineCurve = function(FirstPoint, MiddlePoint, AfterPoint, t) {
        var d01 = Math.sqrt(Math.pow(MiddlePoint.x - FirstPoint.x, 2) + Math.pow(MiddlePoint.y - FirstPoint.y, 2)), d12 = Math.sqrt(Math.pow(AfterPoint.x - MiddlePoint.x, 2) + Math.pow(AfterPoint.y - MiddlePoint.y, 2)), fa = t * d01 / (d01 + d12), fb = t * d12 / (d01 + d12);
        return {
            inner: {
                x: MiddlePoint.x - fa * (AfterPoint.x - FirstPoint.x),
                y: MiddlePoint.y - fa * (AfterPoint.y - FirstPoint.y)
            },
            outer: {
                x: MiddlePoint.x + fb * (AfterPoint.x - FirstPoint.x),
                y: MiddlePoint.y + fb * (AfterPoint.y - FirstPoint.y)
            }
        };
    }, helpers.calculateOrderOfMagnitude = function(val) {
        return Math.floor(Math.log(val) / Math.LN10);
    }), template = (helpers.calculateScaleRange = function(valuesArray, drawingSize, textSize, startFromZero, integersOnly) {
        var minSteps = 2, maxSteps = Math.floor(drawingSize / (1.5 * textSize)), skipFitting = minSteps >= maxSteps;
        var maxValue = max(valuesArray), minValue = min(valuesArray);
        if (maxValue === minValue) {
            maxValue += .5;
            minValue >= .5 && !startFromZero ? minValue -= .5 : maxValue += .5;
        }
        var valueRange = Math.abs(maxValue - minValue), rangeOrderOfMagnitude = calculateOrderOfMagnitude(valueRange), graphMax = Math.ceil(maxValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude), graphMin = startFromZero ? 0 : Math.floor(minValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude), graphRange = graphMax - graphMin, stepValue = Math.pow(10, rangeOrderOfMagnitude), numberOfSteps = Math.round(graphRange / stepValue);
        while ((numberOfSteps > maxSteps || maxSteps > 2 * numberOfSteps) && !skipFitting) if (numberOfSteps > maxSteps) {
            stepValue *= 2;
            numberOfSteps = Math.round(graphRange / stepValue);
            0 !== numberOfSteps % 1 && (skipFitting = true);
        } else if (integersOnly && rangeOrderOfMagnitude >= 0) {
            if (0 !== stepValue / 2 % 1) break;
            stepValue /= 2;
            numberOfSteps = Math.round(graphRange / stepValue);
        } else {
            stepValue /= 2;
            numberOfSteps = Math.round(graphRange / stepValue);
        }
        if (skipFitting) {
            numberOfSteps = minSteps;
            stepValue = graphRange / numberOfSteps;
        }
        return {
            steps: numberOfSteps,
            stepValue: stepValue,
            min: graphMin,
            max: graphMin + numberOfSteps * stepValue
        };
    }, helpers.template = function(templateString, valuesObject) {
        function tmpl(str, data) {
            var fn = /\W/.test(str) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + str.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : cache[str] = cache[str];
            return data ? fn(data) : fn;
        }
        var cache = {};
        return tmpl(templateString, valuesObject);
    }), easingEffects = (helpers.generateLabels = function(templateString, numberOfSteps, graphMin, stepValue) {
        var labelsArray = new Array(numberOfSteps);
        labelTemplateString && each(labelsArray, function(val, index) {
            labelsArray[index] = template(templateString, {
                value: graphMin + stepValue * (index + 1)
            });
        });
        return labelsArray;
    }, helpers.easingEffects = {
        linear: function(t) {
            return t;
        },
        easeInQuad: function(t) {
            return t * t;
        },
        easeOutQuad: function(t) {
            return -1 * t * (t - 2);
        },
        easeInOutQuad: function(t) {
            if (1 > (t /= .5)) return .5 * t * t;
            return -0.5 * (--t * (t - 2) - 1);
        },
        easeInCubic: function(t) {
            return t * t * t;
        },
        easeOutCubic: function(t) {
            return 1 * ((t = t / 1 - 1) * t * t + 1);
        },
        easeInOutCubic: function(t) {
            if (1 > (t /= .5)) return .5 * t * t * t;
            return .5 * ((t -= 2) * t * t + 2);
        },
        easeInQuart: function(t) {
            return t * t * t * t;
        },
        easeOutQuart: function(t) {
            return -1 * ((t = t / 1 - 1) * t * t * t - 1);
        },
        easeInOutQuart: function(t) {
            if (1 > (t /= .5)) return .5 * t * t * t * t;
            return -0.5 * ((t -= 2) * t * t * t - 2);
        },
        easeInQuint: function(t) {
            return 1 * (t /= 1) * t * t * t * t;
        },
        easeOutQuint: function(t) {
            return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
        },
        easeInOutQuint: function(t) {
            if (1 > (t /= .5)) return .5 * t * t * t * t * t;
            return .5 * ((t -= 2) * t * t * t * t + 2);
        },
        easeInSine: function(t) {
            return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
        },
        easeOutSine: function(t) {
            return 1 * Math.sin(t / 1 * (Math.PI / 2));
        },
        easeInOutSine: function(t) {
            return -0.5 * (Math.cos(Math.PI * t / 1) - 1);
        },
        easeInExpo: function(t) {
            return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
        },
        easeOutExpo: function(t) {
            return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
        },
        easeInOutExpo: function(t) {
            if (0 === t) return 0;
            if (1 === t) return 1;
            if (1 > (t /= .5)) return .5 * Math.pow(2, 10 * (t - 1));
            return .5 * (-Math.pow(2, -10 * --t) + 2);
        },
        easeInCirc: function(t) {
            if (t >= 1) return t;
            return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
        },
        easeOutCirc: function(t) {
            return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
        },
        easeInOutCirc: function(t) {
            if (1 > (t /= .5)) return -0.5 * (Math.sqrt(1 - t * t) - 1);
            return .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        },
        easeInElastic: function(t) {
            var s = 1.70158;
            var p = 0;
            var a = 1;
            if (0 === t) return 0;
            if (1 == (t /= 1)) return 1;
            p || (p = .3);
            if (Math.abs(1) > a) {
                a = 1;
                s = p / 4;
            } else s = p / (2 * Math.PI) * Math.asin(1 / a);
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - s) * 2 * Math.PI / p));
        },
        easeOutElastic: function(t) {
            var s = 1.70158;
            var p = 0;
            var a = 1;
            if (0 === t) return 0;
            if (1 == (t /= 1)) return 1;
            p || (p = .3);
            if (Math.abs(1) > a) {
                a = 1;
                s = p / 4;
            } else s = p / (2 * Math.PI) * Math.asin(1 / a);
            return a * Math.pow(2, -10 * t) * Math.sin((1 * t - s) * 2 * Math.PI / p) + 1;
        },
        easeInOutElastic: function(t) {
            var s = 1.70158;
            var p = 0;
            var a = 1;
            if (0 === t) return 0;
            if (2 == (t /= .5)) return 1;
            p || (p = 1 * .3 * 1.5);
            if (Math.abs(1) > a) {
                a = 1;
                s = p / 4;
            } else s = p / (2 * Math.PI) * Math.asin(1 / a);
            if (1 > t) return -.5 * a * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - s) * 2 * Math.PI / p);
            return .5 * a * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - s) * 2 * Math.PI / p) + 1;
        },
        easeInBack: function(t) {
            var s = 1.70158;
            return 1 * (t /= 1) * t * ((s + 1) * t - s);
        },
        easeOutBack: function(t) {
            var s = 1.70158;
            return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
        },
        easeInOutBack: function(t) {
            var s = 1.70158;
            if (1 > (t /= .5)) return .5 * t * t * (((s *= 1.525) + 1) * t - s);
            return .5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
        },
        easeInBounce: function(t) {
            return 1 - easingEffects.easeOutBounce(1 - t);
        },
        easeOutBounce: function(t) {
            return 1 / 2.75 > (t /= 1) ? 1 * 7.5625 * t * t : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
        },
        easeInOutBounce: function(t) {
            if (.5 > t) return .5 * easingEffects.easeInBounce(2 * t);
            return .5 * easingEffects.easeOutBounce(2 * t - 1) + .5;
        }
    }), requestAnimFrame = helpers.requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
            return window.setTimeout(callback, 1e3 / 60);
        };
    }(), addEvent = (helpers.cancelAnimFrame = function() {
        return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(callback) {
            return window.clearTimeout(callback, 1e3 / 60);
        };
    }(), helpers.animationLoop = function(callback, totalSteps, easingString, onProgress, onComplete, chartInstance) {
        var currentStep = 0, easingFunction = easingEffects[easingString] || easingEffects.linear;
        var animationFrame = function() {
            currentStep++;
            var stepDecimal = currentStep / totalSteps;
            var easeDecimal = easingFunction(stepDecimal);
            callback.call(chartInstance, easeDecimal, stepDecimal, currentStep);
            onProgress.call(chartInstance, easeDecimal, stepDecimal);
            totalSteps > currentStep ? chartInstance.animationFrame = requestAnimFrame(animationFrame) : onComplete.apply(chartInstance);
        };
        requestAnimFrame(animationFrame);
    }, helpers.getRelativePosition = function(evt) {
        var mouseX, mouseY;
        var e = evt.originalEvent || evt, canvas = evt.currentTarget || evt.srcElement, boundingRect = canvas.getBoundingClientRect();
        if (e.touches) {
            mouseX = e.touches[0].clientX - boundingRect.left;
            mouseY = e.touches[0].clientY - boundingRect.top;
        } else {
            mouseX = e.clientX - boundingRect.left;
            mouseY = e.clientY - boundingRect.top;
        }
        return {
            x: mouseX,
            y: mouseY
        };
    }, helpers.addEvent = function(node, eventType, method) {
        node.addEventListener ? node.addEventListener(eventType, method) : node.attachEvent ? node.attachEvent("on" + eventType, method) : node["on" + eventType] = method;
    }), removeEvent = helpers.removeEvent = function(node, eventType, handler) {
        node.removeEventListener ? node.removeEventListener(eventType, handler, false) : node.detachEvent ? node.detachEvent("on" + eventType, handler) : node["on" + eventType] = noop;
    }, unbindEvents = (helpers.bindEvents = function(chartInstance, arrayOfEvents, handler) {
        chartInstance.events || (chartInstance.events = {});
        each(arrayOfEvents, function(eventName) {
            chartInstance.events[eventName] = function() {
                handler.apply(chartInstance, arguments);
            };
            addEvent(chartInstance.chart.canvas, eventName, chartInstance.events[eventName]);
        });
    }, helpers.unbindEvents = function(chartInstance, arrayOfEvents) {
        each(arrayOfEvents, function(handler, eventName) {
            removeEvent(chartInstance.chart.canvas, eventName, handler);
        });
    }), getMaximumSize = helpers.getMaximumSize = function(domNode) {
        var container = domNode.parentNode;
        return container.clientWidth;
    }, retinaScale = helpers.retinaScale = function(chart) {
        var ctx = chart.ctx, width = chart.canvas.width, height = chart.canvas.height;
        if (window.devicePixelRatio) {
            ctx.canvas.style.width = width + "px";
            ctx.canvas.style.height = height + "px";
            ctx.canvas.height = height * window.devicePixelRatio;
            ctx.canvas.width = width * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        }
    }, clear = helpers.clear = function(chart) {
        chart.ctx.clearRect(0, 0, chart.width, chart.height);
    }, fontString = helpers.fontString = function(pixelSize, fontStyle, fontFamily) {
        return fontStyle + " " + pixelSize + "px " + fontFamily;
    }, longestText = helpers.longestText = function(ctx, font, arrayOfStrings) {
        ctx.font = font;
        var longest = 0;
        each(arrayOfStrings, function(string) {
            var textWidth = ctx.measureText(string).width;
            longest = textWidth > longest ? textWidth : longest;
        });
        return longest;
    }, drawRoundedRectangle = helpers.drawRoundedRectangle = function(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
    };
    Chart.instances = {};
    Chart.Type = function(data, options, chart) {
        this.options = options;
        this.chart = chart;
        this.id = uid();
        Chart.instances[this.id] = this;
        options.responsive && this.resize();
        this.initialize.call(this, data);
    };
    extend(Chart.Type.prototype, {
        initialize: function() {
            return this;
        },
        clear: function() {
            clear(this.chart);
            return this;
        },
        stop: function() {
            helpers.cancelAnimFrame.call(root, this.animationFrame);
            return this;
        },
        resize: function(callback) {
            this.stop();
            var canvas = this.chart.canvas, newWidth = getMaximumSize(this.chart.canvas), newHeight = newWidth / this.chart.aspectRatio;
            canvas.width = this.chart.width = newWidth;
            canvas.height = this.chart.height = newHeight;
            retinaScale(this.chart);
            "function" == typeof callback && callback.apply(this, Array.prototype.slice.call(arguments, 1));
            return this;
        },
        reflow: noop,
        render: function(reflow) {
            reflow && this.reflow();
            if (this.options.animation && !reflow) helpers.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this); else {
                this.draw();
                this.options.onAnimationComplete.call(this);
            }
            return this;
        },
        generateLegend: function() {
            return template(this.options.legendTemplate, this);
        },
        destroy: function() {
            this.clear();
            unbindEvents(this, this.events);
            delete Chart.instances[this.id];
        },
        showTooltip: function(ChartElements, forceRedraw) {
            "undefined" == typeof this.activeElements && (this.activeElements = []);
            var isChanged = function(Elements) {
                var changed = false;
                if (Elements.length !== this.activeElements.length) {
                    changed = true;
                    return changed;
                }
                each(Elements, function(element, index) {
                    element !== this.activeElements[index] && (changed = true);
                }, this);
                return changed;
            }.call(this, ChartElements);
            if (!isChanged && !forceRedraw) return;
            this.activeElements = ChartElements;
            this.draw();
            if (ChartElements.length > 0) if (this.datasets && this.datasets.length > 1) {
                var dataArray, dataIndex;
                for (var i = this.datasets.length - 1; i >= 0; i--) {
                    dataArray = this.datasets[i].points || this.datasets[i].bars || this.datasets[i].segments;
                    dataIndex = indexOf(dataArray, ChartElements[0]);
                    if (-1 !== dataIndex) break;
                }
                var tooltipLabels = [], tooltipColors = [], medianPosition = function() {
                    var dataCollection, xMax, yMax, xMin, yMin, Elements = [], xPositions = [], yPositions = [];
                    helpers.each(this.datasets, function(dataset) {
                        dataCollection = dataset.points || dataset.bars || dataset.segments;
                        dataCollection[dataIndex] && Elements.push(dataCollection[dataIndex]);
                    });
                    helpers.each(Elements, function(element) {
                        xPositions.push(element.x);
                        yPositions.push(element.y);
                        tooltipLabels.push(helpers.template(this.options.multiTooltipTemplate, element));
                        tooltipColors.push({
                            fill: element._saved.fillColor || element.fillColor,
                            stroke: element._saved.strokeColor || element.strokeColor
                        });
                    }, this);
                    yMin = min(yPositions);
                    yMax = max(yPositions);
                    xMin = min(xPositions);
                    xMax = max(xPositions);
                    return {
                        x: xMin > this.chart.width / 2 ? xMin : xMax,
                        y: (yMin + yMax) / 2
                    };
                }.call(this, dataIndex);
                new Chart.MultiTooltip({
                    x: medianPosition.x,
                    y: medianPosition.y,
                    xPadding: this.options.tooltipXPadding,
                    yPadding: this.options.tooltipYPadding,
                    xOffset: this.options.tooltipXOffset,
                    fillColor: this.options.tooltipFillColor,
                    textColor: this.options.tooltipFontColor,
                    fontFamily: this.options.tooltipFontFamily,
                    fontStyle: this.options.tooltipFontStyle,
                    fontSize: this.options.tooltipFontSize,
                    titleTextColor: this.options.tooltipTitleFontColor,
                    titleFontFamily: this.options.tooltipTitleFontFamily,
                    titleFontStyle: this.options.tooltipTitleFontStyle,
                    titleFontSize: this.options.tooltipTitleFontSize,
                    cornerRadius: this.options.tooltipCornerRadius,
                    labels: tooltipLabels,
                    legendColors: tooltipColors,
                    legendColorBackground: this.options.multiTooltipKeyBackground,
                    title: ChartElements[0].label,
                    chart: this.chart,
                    ctx: this.chart.ctx
                }).draw();
            } else each(ChartElements, function(Element) {
                var tooltipPosition = Element.tooltipPosition();
                new Chart.Tooltip({
                    x: Math.round(tooltipPosition.x),
                    y: Math.round(tooltipPosition.y),
                    xPadding: this.options.tooltipXPadding,
                    yPadding: this.options.tooltipYPadding,
                    fillColor: this.options.tooltipFillColor,
                    textColor: this.options.tooltipFontColor,
                    fontFamily: this.options.tooltipFontFamily,
                    fontStyle: this.options.tooltipFontStyle,
                    fontSize: this.options.tooltipFontSize,
                    caretHeight: this.options.tooltipCaretSize,
                    cornerRadius: this.options.tooltipCornerRadius,
                    text: template(this.options.tooltipTemplate, Element),
                    chart: this.chart
                }).draw();
            }, this);
            return this;
        },
        toBase64Image: function() {
            return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
        }
    });
    Chart.Type.extend = function(extensions) {
        var parent = this;
        var ChartType = function() {
            return parent.apply(this, arguments);
        };
        ChartType.prototype = clone(parent.prototype);
        extend(ChartType.prototype, extensions);
        ChartType.extend = Chart.Type.extend;
        if (extensions.name || parent.prototype.name) {
            var chartName = extensions.name || parent.prototype.name;
            var baseDefaults = Chart.defaults[parent.prototype.name] ? clone(Chart.defaults[parent.prototype.name]) : {};
            Chart.defaults[chartName] = extend(baseDefaults, extensions.defaults);
            Chart.types[chartName] = ChartType;
            Chart.prototype[chartName] = function(data, options) {
                var config = merge(Chart.defaults.global, Chart.defaults[chartName], options || {});
                return new ChartType(data, config, this);
            };
        } else warn("Name not provided for this chart, so it hasn't been registered");
        return parent;
    };
    Chart.Element = function(configuration) {
        extend(this, configuration);
        this.initialize.apply(this, arguments);
        this.save();
    };
    extend(Chart.Element.prototype, {
        initialize: function() {},
        restore: function(props) {
            props ? each(props, function(key) {
                this[key] = this._saved[key];
            }, this) : extend(this, this._saved);
            return this;
        },
        save: function() {
            this._saved = clone(this);
            delete this._saved._saved;
            return this;
        },
        update: function(newProps) {
            each(newProps, function(value, key) {
                this._saved[key] = this[key];
                this[key] = value;
            }, this);
            return this;
        },
        transition: function(props, ease) {
            each(props, function(value, key) {
                this[key] = (value - this._saved[key]) * ease + this._saved[key];
            }, this);
            return this;
        },
        tooltipPosition: function() {
            return {
                x: this.x,
                y: this.y
            };
        }
    });
    Chart.Element.extend = inherits;
    Chart.Point = Chart.Element.extend({
        display: true,
        inRange: function(chartX, chartY) {
            var hitDetectionRange = this.hitDetectionRadius + this.radius;
            return Math.pow(chartX - this.x, 2) + Math.pow(chartY - this.y, 2) < Math.pow(hitDetectionRange, 2);
        },
        draw: function() {
            if (this.display) {
                var ctx = this.ctx;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.strokeStyle = this.strokeColor;
                ctx.lineWidth = this.strokeWidth;
                ctx.fillStyle = this.fillColor;
                ctx.fill();
                ctx.stroke();
            }
        }
    });
    Chart.Arc = Chart.Element.extend({
        inRange: function(chartX, chartY) {
            var pointRelativePosition = helpers.getAngleFromPoint(this, {
                x: chartX,
                y: chartY
            });
            var betweenAngles = pointRelativePosition.angle >= this.startAngle && pointRelativePosition.angle <= this.endAngle, withinRadius = pointRelativePosition.distance >= this.innerRadius && pointRelativePosition.distance <= this.outerRadius;
            return betweenAngles && withinRadius;
        },
        tooltipPosition: function() {
            var centreAngle = this.startAngle + (this.endAngle - this.startAngle) / 2, rangeFromCentre = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
            return {
                x: this.x + Math.cos(centreAngle) * rangeFromCentre,
                y: this.y + Math.sin(centreAngle) * rangeFromCentre
            };
        },
        draw: function(animationPercent) {
            var ctx = this.ctx;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle);
            ctx.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, true);
            ctx.closePath();
            ctx.strokeStyle = this.strokeColor;
            ctx.lineWidth = this.strokeWidth;
            ctx.fillStyle = this.fillColor;
            ctx.fill();
            ctx.lineJoin = "bevel";
            this.showStroke && ctx.stroke();
        }
    });
    Chart.Rectangle = Chart.Element.extend({
        draw: function() {
            var ctx = this.ctx, halfWidth = this.width / 2, leftX = this.x - halfWidth, rightX = this.x + halfWidth, top = this.base - (this.base - this.y), halfStroke = this.strokeWidth / 2;
            if (this.showStroke) {
                leftX += halfStroke;
                rightX -= halfStroke;
                top += halfStroke;
            }
            ctx.beginPath();
            ctx.fillStyle = this.fillColor;
            ctx.strokeStyle = this.strokeColor;
            ctx.lineWidth = this.strokeWidth;
            ctx.moveTo(leftX, this.base);
            ctx.lineTo(leftX, top);
            ctx.lineTo(rightX, top);
            ctx.lineTo(rightX, this.base);
            ctx.fill();
            this.showStroke && ctx.stroke();
        },
        height: function() {
            return this.base - this.y;
        },
        inRange: function(chartX, chartY) {
            return chartX >= this.x - this.width / 2 && this.x + this.width / 2 >= chartX && chartY >= this.y && this.base >= chartY;
        }
    });
    Chart.Tooltip = Chart.Element.extend({
        draw: function() {
            var ctx = this.chart.ctx;
            ctx.font = fontString(this.fontSize, this.fontStyle, this.fontFamily);
            this.xAlign = "center";
            this.yAlign = "above";
            var caretPadding = 2;
            var tooltipWidth = ctx.measureText(this.text).width + 2 * this.xPadding, tooltipRectHeight = this.fontSize + 2 * this.yPadding, tooltipHeight = tooltipRectHeight + this.caretHeight + caretPadding;
            this.x + tooltipWidth / 2 > this.chart.width ? this.xAlign = "left" : 0 > this.x - tooltipWidth / 2 && (this.xAlign = "right");
            0 > this.y - tooltipHeight && (this.yAlign = "below");
            var tooltipX = this.x - tooltipWidth / 2, tooltipY = this.y - tooltipHeight;
            ctx.fillStyle = this.fillColor;
            switch (this.yAlign) {
              case "above":
                ctx.beginPath();
                ctx.moveTo(this.x, this.y - caretPadding);
                ctx.lineTo(this.x + this.caretHeight, this.y - (caretPadding + this.caretHeight));
                ctx.lineTo(this.x - this.caretHeight, this.y - (caretPadding + this.caretHeight));
                ctx.closePath();
                ctx.fill();
                break;

              case "below":
                tooltipY = this.y + caretPadding + this.caretHeight;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y + caretPadding);
                ctx.lineTo(this.x + this.caretHeight, this.y + caretPadding + this.caretHeight);
                ctx.lineTo(this.x - this.caretHeight, this.y + caretPadding + this.caretHeight);
                ctx.closePath();
                ctx.fill();
            }
            switch (this.xAlign) {
              case "left":
                tooltipX = this.x - tooltipWidth + (this.cornerRadius + this.caretHeight);
                break;

              case "right":
                tooltipX = this.x - (this.cornerRadius + this.caretHeight);
            }
            drawRoundedRectangle(ctx, tooltipX, tooltipY, tooltipWidth, tooltipRectHeight, this.cornerRadius);
            ctx.fill();
            ctx.fillStyle = this.textColor;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(this.text, tooltipX + tooltipWidth / 2, tooltipY + tooltipRectHeight / 2);
        }
    });
    Chart.MultiTooltip = Chart.Element.extend({
        initialize: function() {
            this.font = fontString(this.fontSize, this.fontStyle, this.fontFamily);
            this.titleFont = fontString(this.titleFontSize, this.titleFontStyle, this.titleFontFamily);
            this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize;
            this.ctx.font = this.titleFont;
            var titleWidth = this.ctx.measureText(this.title).width, labelWidth = longestText(this.ctx, this.font, this.labels) + this.fontSize + 3, longestTextWidth = max([ labelWidth, titleWidth ]);
            this.width = longestTextWidth + 2 * this.xPadding;
            var halfHeight = this.height / 2;
            0 > this.y - halfHeight ? this.y = halfHeight : this.y + halfHeight > this.chart.height && (this.y = this.chart.height - halfHeight);
            this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset;
        },
        getLineHeight: function(index) {
            var baseLineHeight = this.y - this.height / 2 + this.yPadding, afterTitleIndex = index - 1;
            return 0 === index ? baseLineHeight + this.titleFontSize / 2 : baseLineHeight + (1.5 * this.fontSize * afterTitleIndex + this.fontSize / 2) + 1.5 * this.titleFontSize;
        },
        draw: function() {
            drawRoundedRectangle(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
            var ctx = this.ctx;
            ctx.fillStyle = this.fillColor;
            ctx.fill();
            ctx.closePath();
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            ctx.fillStyle = this.titleTextColor;
            ctx.font = this.titleFont;
            ctx.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0));
            ctx.font = this.font;
            helpers.each(this.labels, function(label, index) {
                ctx.fillStyle = this.textColor;
                ctx.fillText(label, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(index + 1));
                ctx.fillStyle = this.legendColorBackground;
                ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize / 2, this.fontSize, this.fontSize);
                ctx.fillStyle = this.legendColors[index].fill;
                ctx.fillRect(this.x + this.xPadding, this.getLineHeight(index + 1) - this.fontSize / 2, this.fontSize, this.fontSize);
            }, this);
        }
    });
    Chart.Scale = Chart.Element.extend({
        initialize: function() {
            this.fit();
        },
        buildYLabels: function() {
            this.yLabels = [];
            var stepDecimalPlaces = getDecimalPlaces(this.stepValue);
            for (var i = 0; this.steps >= i; i++) this.yLabels.push(template(this.templateString, {
                value: (this.min + i * this.stepValue).toFixed(stepDecimalPlaces)
            }));
            this.yLabelWidth = this.display && this.showLabels ? longestText(this.ctx, this.font, this.yLabels) : 0;
        },
        addXLabel: function(label) {
            this.xLabels.push(label);
            this.valuesCount++;
            this.fit();
        },
        removeXLabel: function() {
            this.xLabels.shift();
            this.valuesCount--;
            this.fit();
        },
        fit: function() {
            this.startPoint = this.display ? this.fontSize : 0;
            this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height;
            this.startPoint += this.padding;
            this.endPoint -= this.padding;
            var cachedYLabelWidth, cachedHeight = this.endPoint - this.startPoint;
            this.calculateYRange(cachedHeight);
            this.buildYLabels();
            this.calculateXLabelRotation();
            while (cachedHeight > this.endPoint - this.startPoint) {
                cachedHeight = this.endPoint - this.startPoint;
                cachedYLabelWidth = this.yLabelWidth;
                this.calculateYRange(cachedHeight);
                this.buildYLabels();
                this.yLabelWidth > cachedYLabelWidth && this.calculateXLabelRotation();
            }
        },
        calculateXLabelRotation: function() {
            this.ctx.font = this.font;
            var firstRotated, lastRotated, firstWidth = this.ctx.measureText(this.xLabels[0]).width, lastWidth = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
            this.xScalePaddingRight = lastWidth / 2 + 3;
            this.xScalePaddingLeft = firstWidth / 2 > this.yLabelWidth + 10 ? firstWidth / 2 : this.yLabelWidth + 10;
            this.xLabelRotation = 0;
            if (this.display) {
                var cosRotation, originalLabelWidth = longestText(this.ctx, this.font, this.xLabels);
                this.xLabelWidth = originalLabelWidth;
                var xGridWidth = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6;
                while (this.xLabelWidth > xGridWidth && 0 === this.xLabelRotation || this.xLabelWidth > xGridWidth && 90 >= this.xLabelRotation && this.xLabelRotation > 0) {
                    cosRotation = Math.cos(toRadians(this.xLabelRotation));
                    firstRotated = cosRotation * firstWidth;
                    lastRotated = cosRotation * lastWidth;
                    firstRotated + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = firstRotated + this.fontSize / 2);
                    this.xScalePaddingRight = this.fontSize / 2;
                    this.xLabelRotation++;
                    this.xLabelWidth = cosRotation * originalLabelWidth;
                }
                this.xLabelRotation > 0 && (this.endPoint -= Math.sin(toRadians(this.xLabelRotation)) * originalLabelWidth + 3);
            } else {
                this.xLabelWidth = 0;
                this.xScalePaddingRight = this.padding;
                this.xScalePaddingLeft = this.padding;
            }
        },
        calculateYRange: noop,
        drawingArea: function() {
            return this.startPoint - this.endPoint;
        },
        calculateY: function(value) {
            var scalingFactor = this.drawingArea() / (this.min - this.max);
            return this.endPoint - scalingFactor * (value - this.min);
        },
        calculateX: function(index) {
            var innerWidth = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)), valueWidth = innerWidth / (this.valuesCount - (this.offsetGridLines ? 0 : 1)), valueOffset = valueWidth * index + this.xScalePaddingLeft;
            this.offsetGridLines && (valueOffset += valueWidth / 2);
            return Math.round(valueOffset);
        },
        update: function(newProps) {
            helpers.extend(this, newProps);
            this.fit();
        },
        draw: function() {
            var ctx = this.ctx, yLabelGap = (this.endPoint - this.startPoint) / this.steps, xStart = Math.round(this.xScalePaddingLeft);
            if (this.display) {
                ctx.fillStyle = this.textColor;
                ctx.font = this.font;
                each(this.yLabels, function(labelString, index) {
                    var yLabelCenter = this.endPoint - yLabelGap * index, linePositionY = Math.round(yLabelCenter);
                    ctx.textAlign = "right";
                    ctx.textBaseline = "middle";
                    this.showLabels && ctx.fillText(labelString, xStart - 10, yLabelCenter);
                    ctx.beginPath();
                    if (index > 0) {
                        ctx.lineWidth = this.gridLineWidth;
                        ctx.strokeStyle = this.gridLineColor;
                    } else {
                        ctx.lineWidth = this.lineWidth;
                        ctx.strokeStyle = this.lineColor;
                    }
                    linePositionY += helpers.aliasPixel(ctx.lineWidth);
                    ctx.moveTo(xStart, linePositionY);
                    ctx.lineTo(this.width, linePositionY);
                    ctx.stroke();
                    ctx.closePath();
                    ctx.lineWidth = this.lineWidth;
                    ctx.strokeStyle = this.lineColor;
                    ctx.beginPath();
                    ctx.moveTo(xStart - 5, linePositionY);
                    ctx.lineTo(xStart, linePositionY);
                    ctx.stroke();
                    ctx.closePath();
                }, this);
                each(this.xLabels, function(label, index) {
                    var xPos = this.calculateX(index) + aliasPixel(this.lineWidth), linePos = this.calculateX(index - (this.offsetGridLines ? .5 : 0)) + aliasPixel(this.lineWidth), isRotated = this.xLabelRotation > 0;
                    ctx.beginPath();
                    if (index > 0) {
                        ctx.lineWidth = this.gridLineWidth;
                        ctx.strokeStyle = this.gridLineColor;
                    } else {
                        ctx.lineWidth = this.lineWidth;
                        ctx.strokeStyle = this.lineColor;
                    }
                    ctx.moveTo(linePos, this.endPoint);
                    ctx.lineTo(linePos, this.startPoint - 3);
                    ctx.stroke();
                    ctx.closePath();
                    ctx.lineWidth = this.lineWidth;
                    ctx.strokeStyle = this.lineColor;
                    ctx.beginPath();
                    ctx.moveTo(linePos, this.endPoint);
                    ctx.lineTo(linePos, this.endPoint + 5);
                    ctx.stroke();
                    ctx.closePath();
                    ctx.save();
                    ctx.translate(xPos, isRotated ? this.endPoint + 12 : this.endPoint + 8);
                    ctx.rotate(-1 * toRadians(this.xLabelRotation));
                    ctx.font = this.font;
                    ctx.textAlign = isRotated ? "right" : "center";
                    ctx.textBaseline = isRotated ? "middle" : "top";
                    ctx.fillText(label, 0, 0);
                    ctx.restore();
                }, this);
            }
        }
    });
    Chart.RadialScale = Chart.Element.extend({
        initialize: function() {
            this.size = min([ this.height, this.width ]);
            this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2;
        },
        calculateCenterOffset: function(value) {
            var scalingFactor = this.drawingArea / (this.max - this.min);
            return (value - this.min) * scalingFactor;
        },
        update: function() {
            this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize();
            this.buildYLabels();
        },
        buildYLabels: function() {
            this.yLabels = [];
            var stepDecimalPlaces = getDecimalPlaces(this.stepValue);
            for (var i = 0; this.steps >= i; i++) this.yLabels.push(template(this.templateString, {
                value: (this.min + i * this.stepValue).toFixed(stepDecimalPlaces)
            }));
        },
        getCircumference: function() {
            return 2 * Math.PI / this.valuesCount;
        },
        setScaleSize: function() {
            var pointPosition, i, textWidth, halfTextWidth, furthestRightIndex, furthestRightAngle, furthestLeftIndex, furthestLeftAngle, xProtrusionLeft, xProtrusionRight, radiusReductionRight, radiusReductionLeft, largestPossibleRadius = min([ this.height / 2 - this.pointLabelFontSize - 5, this.width / 2 ]), furthestRight = this.width, furthestLeft = 0;
            this.ctx.font = fontString(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily);
            for (i = 0; this.valuesCount > i; i++) {
                pointPosition = this.getPointPosition(i, largestPossibleRadius);
                textWidth = this.ctx.measureText(template(this.templateString, {
                    value: this.labels[i]
                })).width + 5;
                if (0 === i || i === this.valuesCount / 2) {
                    halfTextWidth = textWidth / 2;
                    if (pointPosition.x + halfTextWidth > furthestRight) {
                        furthestRight = pointPosition.x + halfTextWidth;
                        furthestRightIndex = i;
                    }
                    if (furthestLeft > pointPosition.x - halfTextWidth) {
                        furthestLeft = pointPosition.x - halfTextWidth;
                        furthestLeftIndex = i;
                    }
                } else if (this.valuesCount / 2 > i) {
                    if (pointPosition.x + textWidth > furthestRight) {
                        furthestRight = pointPosition.x + textWidth;
                        furthestRightIndex = i;
                    }
                } else if (i > this.valuesCount / 2 && furthestLeft > pointPosition.x - textWidth) {
                    furthestLeft = pointPosition.x - textWidth;
                    furthestLeftIndex = i;
                }
            }
            xProtrusionLeft = furthestLeft;
            xProtrusionRight = Math.ceil(furthestRight - this.width);
            furthestRightAngle = this.getIndexAngle(furthestRightIndex);
            furthestLeftAngle = this.getIndexAngle(furthestLeftIndex);
            radiusReductionRight = xProtrusionRight / Math.sin(furthestRightAngle + Math.PI / 2);
            radiusReductionLeft = xProtrusionLeft / Math.sin(furthestLeftAngle + Math.PI / 2);
            radiusReductionRight = isNumber(radiusReductionRight) ? radiusReductionRight : 0;
            radiusReductionLeft = isNumber(radiusReductionLeft) ? radiusReductionLeft : 0;
            this.drawingArea = largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2;
            this.setCenterPoint(radiusReductionLeft, radiusReductionRight);
        },
        setCenterPoint: function(leftMovement, rightMovement) {
            var maxRight = this.width - rightMovement - this.drawingArea, maxLeft = leftMovement + this.drawingArea;
            this.xCenter = (maxLeft + maxRight) / 2;
            this.yCenter = this.height / 2;
        },
        getIndexAngle: function(index) {
            var angleMultiplier = 2 * Math.PI / this.valuesCount;
            return index * angleMultiplier - Math.PI / 2;
        },
        getPointPosition: function(index, distanceFromCenter) {
            var thisAngle = this.getIndexAngle(index);
            return {
                x: Math.cos(thisAngle) * distanceFromCenter + this.xCenter,
                y: Math.sin(thisAngle) * distanceFromCenter + this.yCenter
            };
        },
        draw: function() {
            if (this.display) {
                var ctx = this.ctx;
                each(this.yLabels, function(label, index) {
                    if (index > 0) {
                        var pointPosition, yCenterOffset = index * (this.drawingArea / this.steps), yHeight = this.yCenter - yCenterOffset;
                        if (this.lineWidth > 0) {
                            ctx.strokeStyle = this.lineColor;
                            ctx.lineWidth = this.lineWidth;
                            if (this.lineArc) {
                                ctx.beginPath();
                                ctx.arc(this.xCenter, this.yCenter, yCenterOffset, 0, 2 * Math.PI);
                                ctx.closePath();
                                ctx.stroke();
                            } else {
                                ctx.beginPath();
                                for (var i = 0; this.valuesCount > i; i++) {
                                    pointPosition = this.getPointPosition(i, this.calculateCenterOffset(this.min + index * this.stepValue));
                                    0 === i ? ctx.moveTo(pointPosition.x, pointPosition.y) : ctx.lineTo(pointPosition.x, pointPosition.y);
                                }
                                ctx.closePath();
                                ctx.stroke();
                            }
                        }
                        if (this.showLabels) {
                            ctx.font = fontString(this.fontSize, this.fontStyle, this.fontFamily);
                            if (this.showLabelBackdrop) {
                                var labelWidth = ctx.measureText(label).width;
                                ctx.fillStyle = this.backdropColor;
                                ctx.fillRect(this.xCenter - labelWidth / 2 - this.backdropPaddingX, yHeight - this.fontSize / 2 - this.backdropPaddingY, labelWidth + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY);
                            }
                            ctx.textAlign = "center";
                            ctx.textBaseline = "middle";
                            ctx.fillStyle = this.fontColor;
                            ctx.fillText(label, this.xCenter, yHeight);
                        }
                    }
                }, this);
                if (!this.lineArc) {
                    ctx.lineWidth = this.angleLineWidth;
                    ctx.strokeStyle = this.angleLineColor;
                    for (var i = this.valuesCount - 1; i >= 0; i--) {
                        if (this.angleLineWidth > 0) {
                            var outerPosition = this.getPointPosition(i, this.calculateCenterOffset(this.max));
                            ctx.beginPath();
                            ctx.moveTo(this.xCenter, this.yCenter);
                            ctx.lineTo(outerPosition.x, outerPosition.y);
                            ctx.stroke();
                            ctx.closePath();
                        }
                        var pointLabelPosition = this.getPointPosition(i, this.calculateCenterOffset(this.max) + 5);
                        ctx.font = fontString(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily);
                        ctx.fillStyle = this.pointLabelFontColor;
                        var labelsCount = this.labels.length, halfLabelsCount = this.labels.length / 2, quarterLabelsCount = halfLabelsCount / 2, upperHalf = quarterLabelsCount > i || i > labelsCount - quarterLabelsCount, exactQuarter = i === quarterLabelsCount || i === labelsCount - quarterLabelsCount;
                        ctx.textAlign = 0 === i ? "center" : i === halfLabelsCount ? "center" : halfLabelsCount > i ? "left" : "right";
                        ctx.textBaseline = exactQuarter ? "middle" : upperHalf ? "bottom" : "top";
                        ctx.fillText(this.labels[i], pointLabelPosition.x, pointLabelPosition.y);
                    }
                }
            }
        }
    });
    helpers.addEvent(window, "resize", function() {
        var timeout;
        return function() {
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                each(Chart.instances, function(instance) {
                    instance.options.responsive && instance.resize(instance.render, true);
                });
            }, 50);
        };
    }());
    amd ? define(function() {
        return Chart;
    }) : "object" == typeof module && module.exports && (module.exports = Chart);
    root.Chart = Chart;
    Chart.noConflict = function() {
        root.Chart = previous;
        return Chart;
    };
}).call(this);

(function() {
    "use strict";
    var root = this, Chart = root.Chart, helpers = Chart.helpers;
    var defaultConfig = {
        scaleBeginAtZero: true,
        scaleShowGridLines: true,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        barShowStroke: true,
        barStrokeWidth: 2,
        barValueSpacing: 5,
        barDatasetSpacing: 1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
    };
    Chart.Type.extend({
        name: "Bar",
        defaults: defaultConfig,
        initialize: function(data) {
            var options = this.options;
            this.ScaleClass = Chart.Scale.extend({
                offsetGridLines: true,
                calculateBarX: function(datasetCount, datasetIndex, barIndex) {
                    var xWidth = this.calculateBaseWidth(), xAbsolute = this.calculateX(barIndex) - xWidth / 2, barWidth = this.calculateBarWidth(datasetCount);
                    return xAbsolute + barWidth * datasetIndex + datasetIndex * options.barDatasetSpacing + barWidth / 2;
                },
                calculateBaseWidth: function() {
                    return this.calculateX(1) - this.calculateX(0) - 2 * options.barValueSpacing;
                },
                calculateBarWidth: function(datasetCount) {
                    var baseWidth = this.calculateBaseWidth() - (datasetCount - 1) * options.barDatasetSpacing;
                    return baseWidth / datasetCount;
                }
            });
            this.datasets = [];
            this.options.showTooltips && helpers.bindEvents(this, this.options.tooltipEvents, function(evt) {
                var activeBars = "mouseout" !== evt.type ? this.getBarsAtEvent(evt) : [];
                this.eachBars(function(bar) {
                    bar.restore([ "fillColor", "strokeColor" ]);
                });
                helpers.each(activeBars, function(activeBar) {
                    activeBar.fillColor = activeBar.highlightFill;
                    activeBar.strokeColor = activeBar.highlightStroke;
                });
                this.showTooltip(activeBars);
            });
            this.BarClass = Chart.Rectangle.extend({
                strokeWidth: this.options.barStrokeWidth,
                showStroke: this.options.barShowStroke,
                ctx: this.chart.ctx
            });
            helpers.each(data.datasets, function(dataset) {
                var datasetObject = {
                    label: dataset.label || null,
                    fillColor: dataset.fillColor,
                    strokeColor: dataset.strokeColor,
                    bars: []
                };
                this.datasets.push(datasetObject);
                helpers.each(dataset.data, function(dataPoint, index) {
                    helpers.isNumber(dataPoint) && datasetObject.bars.push(new this.BarClass({
                        value: dataPoint,
                        label: data.labels[index],
                        datasetLabel: dataset.label,
                        strokeColor: dataset.strokeColor,
                        fillColor: dataset.fillColor,
                        highlightFill: dataset.highlightFill || dataset.fillColor,
                        highlightStroke: dataset.highlightStroke || dataset.strokeColor
                    }));
                }, this);
            }, this);
            this.buildScale(data.labels);
            this.BarClass.prototype.base = this.scale.endPoint;
            this.eachBars(function(bar, index, datasetIndex) {
                helpers.extend(bar, {
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    x: this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
                    y: this.scale.endPoint
                });
                bar.save();
            }, this);
            this.render();
        },
        update: function() {
            this.scale.update();
            helpers.each(this.activeElements, function(activeElement) {
                activeElement.restore([ "fillColor", "strokeColor" ]);
            });
            this.eachBars(function(bar) {
                bar.save();
            });
            this.render();
        },
        eachBars: function(callback) {
            helpers.each(this.datasets, function(dataset, datasetIndex) {
                helpers.each(dataset.bars, callback, this, datasetIndex);
            }, this);
        },
        getBarsAtEvent: function(e) {
            var barIndex, barsArray = [], eventPosition = helpers.getRelativePosition(e), datasetIterator = function(dataset) {
                barsArray.push(dataset.bars[barIndex]);
            };
            for (var datasetIndex = 0; this.datasets.length > datasetIndex; datasetIndex++) for (barIndex = 0; this.datasets[datasetIndex].bars.length > barIndex; barIndex++) if (this.datasets[datasetIndex].bars[barIndex].inRange(eventPosition.x, eventPosition.y)) {
                helpers.each(this.datasets, datasetIterator);
                return barsArray;
            }
            return barsArray;
        },
        buildScale: function(labels) {
            var self = this;
            var dataTotal = function() {
                var values = [];
                self.eachBars(function(bar) {
                    values.push(bar.value);
                });
                return values;
            };
            var scaleOptions = {
                templateString: this.options.scaleLabel,
                height: this.chart.height,
                width: this.chart.width,
                ctx: this.chart.ctx,
                textColor: this.options.scaleFontColor,
                fontSize: this.options.scaleFontSize,
                fontStyle: this.options.scaleFontStyle,
                fontFamily: this.options.scaleFontFamily,
                valuesCount: labels.length,
                beginAtZero: this.options.scaleBeginAtZero,
                integersOnly: this.options.scaleIntegersOnly,
                calculateYRange: function(currentHeight) {
                    var updatedRanges = helpers.calculateScaleRange(dataTotal(), currentHeight, this.fontSize, this.beginAtZero, this.integersOnly);
                    helpers.extend(this, updatedRanges);
                },
                xLabels: labels,
                font: helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                lineWidth: this.options.scaleLineWidth,
                lineColor: this.options.scaleLineColor,
                gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
                showLabels: this.options.scaleShowLabels,
                display: this.options.showScale
            };
            this.options.scaleOverride && helpers.extend(scaleOptions, {
                calculateYRange: helpers.noop,
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            });
            this.scale = new this.ScaleClass(scaleOptions);
        },
        addData: function(valuesArray, label) {
            helpers.each(valuesArray, function(value, datasetIndex) {
                helpers.isNumber(value) && this.datasets[datasetIndex].bars.push(new this.BarClass({
                    value: value,
                    label: label,
                    x: this.scale.calculateBarX(this.datasets.length, datasetIndex, this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    base: this.scale.endPoint,
                    strokeColor: this.datasets[datasetIndex].strokeColor,
                    fillColor: this.datasets[datasetIndex].fillColor
                }));
            }, this);
            this.scale.addXLabel(label);
            this.update();
        },
        removeData: function() {
            this.scale.removeXLabel();
            helpers.each(this.datasets, function(dataset) {
                dataset.bars.shift();
            }, this);
            this.update();
        },
        reflow: function() {
            helpers.extend(this.BarClass.prototype, {
                y: this.scale.endPoint,
                base: this.scale.endPoint
            });
            var newScaleProps = helpers.extend({
                height: this.chart.height,
                width: this.chart.width
            });
            this.scale.update(newScaleProps);
        },
        draw: function(ease) {
            var easingDecimal = ease || 1;
            this.clear();
            this.chart.ctx;
            this.scale.draw(easingDecimal);
            helpers.each(this.datasets, function(dataset, datasetIndex) {
                helpers.each(dataset.bars, function(bar, index) {
                    bar.base = this.scale.endPoint;
                    bar.transition({
                        x: this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
                        y: this.scale.calculateY(bar.value),
                        width: this.scale.calculateBarWidth(this.datasets.length)
                    }, easingDecimal).draw();
                }, this);
            }, this);
        }
    });
}).call(this);

(function() {
    "use strict";
    var root = this, Chart = root.Chart, helpers = Chart.helpers;
    var defaultConfig = {
        segmentShowStroke: true,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        percentageInnerCutout: 50,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: true,
        animateScale: false,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
    };
    Chart.Type.extend({
        name: "Doughnut",
        defaults: defaultConfig,
        initialize: function(data) {
            this.segments = [];
            this.outerRadius = (helpers.min([ this.chart.width, this.chart.height ]) - this.options.segmentStrokeWidth / 2) / 2;
            this.SegmentArc = Chart.Arc.extend({
                ctx: this.chart.ctx,
                x: this.chart.width / 2,
                y: this.chart.height / 2
            });
            this.options.showTooltips && helpers.bindEvents(this, this.options.tooltipEvents, function(evt) {
                var activeSegments = "mouseout" !== evt.type ? this.getSegmentsAtEvent(evt) : [];
                helpers.each(this.segments, function(segment) {
                    segment.restore([ "fillColor" ]);
                });
                helpers.each(activeSegments, function(activeSegment) {
                    activeSegment.fillColor = activeSegment.highlightColor;
                });
                this.showTooltip(activeSegments);
            });
            this.calculateTotal(data);
            helpers.each(data, function(datapoint, index) {
                this.addData(datapoint, index, true);
            }, this);
            this.render();
        },
        getSegmentsAtEvent: function(e) {
            var segmentsArray = [];
            var location = helpers.getRelativePosition(e);
            helpers.each(this.segments, function(segment) {
                segment.inRange(location.x, location.y) && segmentsArray.push(segment);
            }, this);
            return segmentsArray;
        },
        addData: function(segment, atIndex, silent) {
            var index = atIndex || this.segments.length;
            this.segments.splice(index, 0, new this.SegmentArc({
                value: segment.value,
                outerRadius: this.options.animateScale ? 0 : this.outerRadius,
                innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
                fillColor: segment.color,
                highlightColor: segment.highlight || segment.color,
                showStroke: this.options.segmentShowStroke,
                strokeWidth: this.options.segmentStrokeWidth,
                strokeColor: this.options.segmentStrokeColor,
                startAngle: 1.5 * Math.PI,
                circumference: this.options.animateRotate ? 0 : this.calculateCircumference(segment.value),
                label: segment.label
            }));
            if (!silent) {
                this.reflow();
                this.update();
            }
        },
        calculateCircumference: function(value) {
            return 2 * Math.PI * (value / this.total);
        },
        calculateTotal: function(data) {
            this.total = 0;
            helpers.each(data, function(segment) {
                this.total += segment.value;
            }, this);
        },
        update: function() {
            this.calculateTotal(this.segments);
            helpers.each(this.activeElements, function(activeElement) {
                activeElement.restore([ "fillColor" ]);
            });
            helpers.each(this.segments, function(segment) {
                segment.save();
            });
            this.render();
        },
        removeData: function(atIndex) {
            var indexToDelete = helpers.isNumber(atIndex) ? atIndex : this.segments.length - 1;
            this.segments.splice(indexToDelete, 1);
            this.reflow();
            this.update();
        },
        reflow: function() {
            helpers.extend(this.SegmentArc.prototype, {
                x: this.chart.width / 2,
                y: this.chart.height / 2
            });
            this.outerRadius = (helpers.min([ this.chart.width, this.chart.height ]) - this.options.segmentStrokeWidth / 2) / 2;
            helpers.each(this.segments, function(segment) {
                segment.update({
                    outerRadius: this.outerRadius,
                    innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                });
            }, this);
        },
        draw: function(easeDecimal) {
            var animDecimal = easeDecimal ? easeDecimal : 1;
            this.clear();
            helpers.each(this.segments, function(segment, index) {
                segment.transition({
                    circumference: this.calculateCircumference(segment.value),
                    outerRadius: this.outerRadius,
                    innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                }, animDecimal);
                segment.endAngle = segment.startAngle + segment.circumference;
                segment.draw();
                0 === index && (segment.startAngle = 1.5 * Math.PI);
                this.segments.length - 1 > index && (this.segments[index + 1].startAngle = segment.endAngle);
            }, this);
        }
    });
    Chart.types.Doughnut.extend({
        name: "Pie",
        defaults: helpers.merge(defaultConfig, {
            percentageInnerCutout: 0
        })
    });
}).call(this);

(function() {
    "use strict";
    var root = this, Chart = root.Chart, helpers = Chart.helpers;
    var defaultConfig = {
        scaleShowGridLines: true,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        bezierCurve: true,
        bezierCurveTension: .4,
        pointDot: true,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: true,
        datasetStrokeWidth: 2,
        datasetFill: true,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
    };
    Chart.Type.extend({
        name: "Line",
        defaults: defaultConfig,
        initialize: function(data) {
            this.PointClass = Chart.Point.extend({
                strokeWidth: this.options.pointDotStrokeWidth,
                radius: this.options.pointDotRadius,
                display: this.options.pointDot,
                hitDetectionRadius: this.options.pointHitDetectionRadius,
                ctx: this.chart.ctx,
                inRange: function(mouseX) {
                    return Math.pow(mouseX - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2);
                }
            });
            this.datasets = [];
            this.options.showTooltips && helpers.bindEvents(this, this.options.tooltipEvents, function(evt) {
                var activePoints = "mouseout" !== evt.type ? this.getPointsAtEvent(evt) : [];
                this.eachPoints(function(point) {
                    point.restore([ "fillColor", "strokeColor" ]);
                });
                helpers.each(activePoints, function(activePoint) {
                    activePoint.fillColor = activePoint.highlightFill;
                    activePoint.strokeColor = activePoint.highlightStroke;
                });
                this.showTooltip(activePoints);
            });
            helpers.each(data.datasets, function(dataset) {
                var datasetObject = {
                    label: dataset.label || null,
                    fillColor: dataset.fillColor,
                    strokeColor: dataset.strokeColor,
                    pointColor: dataset.pointColor,
                    pointStrokeColor: dataset.pointStrokeColor,
                    points: []
                };
                this.datasets.push(datasetObject);
                helpers.each(dataset.data, function(dataPoint, index) {
                    helpers.isNumber(dataPoint) && datasetObject.points.push(new this.PointClass({
                        value: dataPoint,
                        label: data.labels[index],
                        datasetLabel: dataset.label,
                        strokeColor: dataset.pointStrokeColor,
                        fillColor: dataset.pointColor,
                        highlightFill: dataset.pointHighlightFill || dataset.pointColor,
                        highlightStroke: dataset.pointHighlightStroke || dataset.pointStrokeColor
                    }));
                }, this);
                this.buildScale(data.labels);
                this.eachPoints(function(point, index) {
                    helpers.extend(point, {
                        x: this.scale.calculateX(index),
                        y: this.scale.endPoint
                    });
                    point.save();
                }, this);
            }, this);
            this.render();
        },
        update: function() {
            this.scale.update();
            helpers.each(this.activeElements, function(activeElement) {
                activeElement.restore([ "fillColor", "strokeColor" ]);
            });
            this.eachPoints(function(point) {
                point.save();
            });
            this.render();
        },
        eachPoints: function(callback) {
            helpers.each(this.datasets, function(dataset) {
                helpers.each(dataset.points, callback, this);
            }, this);
        },
        getPointsAtEvent: function(e) {
            var pointsArray = [], eventPosition = helpers.getRelativePosition(e);
            helpers.each(this.datasets, function(dataset) {
                helpers.each(dataset.points, function(point) {
                    point.inRange(eventPosition.x, eventPosition.y) && pointsArray.push(point);
                });
            }, this);
            return pointsArray;
        },
        buildScale: function(labels) {
            var self = this;
            var dataTotal = function() {
                var values = [];
                self.eachPoints(function(point) {
                    values.push(point.value);
                });
                return values;
            };
            var scaleOptions = {
                templateString: this.options.scaleLabel,
                height: this.chart.height,
                width: this.chart.width,
                ctx: this.chart.ctx,
                textColor: this.options.scaleFontColor,
                fontSize: this.options.scaleFontSize,
                fontStyle: this.options.scaleFontStyle,
                fontFamily: this.options.scaleFontFamily,
                valuesCount: labels.length,
                beginAtZero: this.options.scaleBeginAtZero,
                integersOnly: this.options.scaleIntegersOnly,
                calculateYRange: function(currentHeight) {
                    var updatedRanges = helpers.calculateScaleRange(dataTotal(), currentHeight, this.fontSize, this.beginAtZero, this.integersOnly);
                    helpers.extend(this, updatedRanges);
                },
                xLabels: labels,
                font: helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                lineWidth: this.options.scaleLineWidth,
                lineColor: this.options.scaleLineColor,
                gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                showLabels: this.options.scaleShowLabels,
                display: this.options.showScale
            };
            this.options.scaleOverride && helpers.extend(scaleOptions, {
                calculateYRange: helpers.noop,
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            });
            this.scale = new Chart.Scale(scaleOptions);
        },
        addData: function(valuesArray, label) {
            helpers.each(valuesArray, function(value, datasetIndex) {
                helpers.isNumber(value) && this.datasets[datasetIndex].points.push(new this.PointClass({
                    value: value,
                    label: label,
                    x: this.scale.calculateX(this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    strokeColor: this.datasets[datasetIndex].pointStrokeColor,
                    fillColor: this.datasets[datasetIndex].pointColor
                }));
            }, this);
            this.scale.addXLabel(label);
            this.update();
        },
        removeData: function() {
            this.scale.removeXLabel();
            helpers.each(this.datasets, function(dataset) {
                dataset.points.shift();
            }, this);
            this.update();
        },
        reflow: function() {
            var newScaleProps = helpers.extend({
                height: this.chart.height,
                width: this.chart.width
            });
            this.scale.update(newScaleProps);
        },
        draw: function(ease) {
            var easingDecimal = ease || 1;
            this.clear();
            var ctx = this.chart.ctx;
            this.scale.draw(easingDecimal);
            helpers.each(this.datasets, function(dataset) {
                helpers.each(dataset.points, function(point, index) {
                    point.transition({
                        y: this.scale.calculateY(point.value),
                        x: this.scale.calculateX(index)
                    }, easingDecimal);
                }, this);
                this.options.bezierCurve && helpers.each(dataset.points, function(point, index) {
                    point.controlPoints = 0 === index ? helpers.splineCurve(point, point, dataset.points[index + 1], 0) : index >= dataset.points.length - 1 ? helpers.splineCurve(dataset.points[index - 1], point, point, 0) : helpers.splineCurve(dataset.points[index - 1], point, dataset.points[index + 1], this.options.bezierCurveTension);
                }, this);
                ctx.lineWidth = this.options.datasetStrokeWidth;
                ctx.strokeStyle = dataset.strokeColor;
                ctx.beginPath();
                helpers.each(dataset.points, function(point, index) {
                    index > 0 ? this.options.bezierCurve ? ctx.bezierCurveTo(dataset.points[index - 1].controlPoints.outer.x, dataset.points[index - 1].controlPoints.outer.y, point.controlPoints.inner.x, point.controlPoints.inner.y, point.x, point.y) : ctx.lineTo(point.x, point.y) : ctx.moveTo(point.x, point.y);
                }, this);
                ctx.stroke();
                if (this.options.datasetFill) {
                    ctx.lineTo(dataset.points[dataset.points.length - 1].x, this.scale.endPoint);
                    ctx.lineTo(this.scale.calculateX(0), this.scale.endPoint);
                    ctx.fillStyle = dataset.fillColor;
                    ctx.closePath();
                    ctx.fill();
                }
                helpers.each(dataset.points, function(point) {
                    point.draw();
                });
            }, this);
        }
    });
}).call(this);

(function() {
    "use strict";
    var root = this, Chart = root.Chart, helpers = Chart.helpers;
    var defaultConfig = {
        scaleShowLabelBackdrop: true,
        scaleBackdropColor: "rgba(255,255,255,0.75)",
        scaleBeginAtZero: true,
        scaleBackdropPaddingY: 2,
        scaleBackdropPaddingX: 2,
        scaleShowLine: true,
        segmentShowStroke: true,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: true,
        animateScale: false,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
    };
    Chart.Type.extend({
        name: "PolarArea",
        defaults: defaultConfig,
        initialize: function(data) {
            this.segments = [];
            this.SegmentArc = Chart.Arc.extend({
                showStroke: this.options.segmentShowStroke,
                strokeWidth: this.options.segmentStrokeWidth,
                strokeColor: this.options.segmentStrokeColor,
                ctx: this.chart.ctx,
                innerRadius: 0,
                x: this.chart.width / 2,
                y: this.chart.height / 2
            });
            this.scale = new Chart.RadialScale({
                display: this.options.showScale,
                fontStyle: this.options.scaleFontStyle,
                fontSize: this.options.scaleFontSize,
                fontFamily: this.options.scaleFontFamily,
                fontColor: this.options.scaleFontColor,
                showLabels: this.options.scaleShowLabels,
                showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                backdropColor: this.options.scaleBackdropColor,
                backdropPaddingY: this.options.scaleBackdropPaddingY,
                backdropPaddingX: this.options.scaleBackdropPaddingX,
                lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                lineColor: this.options.scaleLineColor,
                lineArc: true,
                width: this.chart.width,
                height: this.chart.height,
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2,
                ctx: this.chart.ctx,
                templateString: this.options.scaleLabel,
                valuesCount: data.length
            });
            this.updateScaleRange(data);
            this.scale.update();
            helpers.each(data, function(segment, index) {
                this.addData(segment, index, true);
            }, this);
            this.options.showTooltips && helpers.bindEvents(this, this.options.tooltipEvents, function(evt) {
                var activeSegments = "mouseout" !== evt.type ? this.getSegmentsAtEvent(evt) : [];
                helpers.each(this.segments, function(segment) {
                    segment.restore([ "fillColor" ]);
                });
                helpers.each(activeSegments, function(activeSegment) {
                    activeSegment.fillColor = activeSegment.highlightColor;
                });
                this.showTooltip(activeSegments);
            });
            this.render();
        },
        getSegmentsAtEvent: function(e) {
            var segmentsArray = [];
            var location = helpers.getRelativePosition(e);
            helpers.each(this.segments, function(segment) {
                segment.inRange(location.x, location.y) && segmentsArray.push(segment);
            }, this);
            return segmentsArray;
        },
        addData: function(segment, atIndex, silent) {
            var index = atIndex || this.segments.length;
            this.segments.splice(index, 0, new this.SegmentArc({
                fillColor: segment.color,
                highlightColor: segment.highlight || segment.color,
                label: segment.label,
                value: segment.value,
                outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(segment.value),
                circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
                startAngle: 1.5 * Math.PI
            }));
            if (!silent) {
                this.reflow();
                this.update();
            }
        },
        removeData: function(atIndex) {
            var indexToDelete = helpers.isNumber(atIndex) ? atIndex : this.segments.length - 1;
            this.segments.splice(indexToDelete, 1);
            this.reflow();
            this.update();
        },
        calculateTotal: function(data) {
            this.total = 0;
            helpers.each(data, function(segment) {
                this.total += segment.value;
            }, this);
            this.scale.valuesCount = this.segments.length;
        },
        updateScaleRange: function(datapoints) {
            var valuesArray = [];
            helpers.each(datapoints, function(segment) {
                valuesArray.push(segment.value);
            });
            var scaleSizes = this.options.scaleOverride ? {
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            } : helpers.calculateScaleRange(valuesArray, helpers.min([ this.chart.width, this.chart.height ]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
            helpers.extend(this.scale, scaleSizes, {
                size: helpers.min([ this.chart.width, this.chart.height ]),
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            });
        },
        update: function() {
            this.calculateTotal(this.segments);
            helpers.each(this.segments, function(segment) {
                segment.save();
            });
            this.render();
        },
        reflow: function() {
            helpers.extend(this.SegmentArc.prototype, {
                x: this.chart.width / 2,
                y: this.chart.height / 2
            });
            this.updateScaleRange(this.segments);
            this.scale.update();
            helpers.extend(this.scale, {
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            });
            helpers.each(this.segments, function(segment) {
                segment.update({
                    outerRadius: this.scale.calculateCenterOffset(segment.value)
                });
            }, this);
        },
        draw: function(ease) {
            var easingDecimal = ease || 1;
            this.clear();
            helpers.each(this.segments, function(segment, index) {
                segment.transition({
                    circumference: this.scale.getCircumference(),
                    outerRadius: this.scale.calculateCenterOffset(segment.value)
                }, easingDecimal);
                segment.endAngle = segment.startAngle + segment.circumference;
                0 === index && (segment.startAngle = 1.5 * Math.PI);
                this.segments.length - 1 > index && (this.segments[index + 1].startAngle = segment.endAngle);
                segment.draw();
            }, this);
            this.scale.draw();
        }
    });
}).call(this);

(function() {
    "use strict";
    var root = this, Chart = root.Chart, helpers = Chart.helpers;
    Chart.Type.extend({
        name: "Radar",
        defaults: {
            scaleShowLine: true,
            angleShowLineOut: true,
            scaleShowLabels: false,
            scaleBeginAtZero: true,
            angleLineColor: "rgba(0,0,0,.1)",
            angleLineWidth: 1,
            pointLabelFontFamily: "'Arial'",
            pointLabelFontStyle: "normal",
            pointLabelFontSize: 10,
            pointLabelFontColor: "#666",
            pointDot: true,
            pointDotRadius: 3,
            pointDotStrokeWidth: 1,
            pointHitDetectionRadius: 20,
            datasetStroke: true,
            datasetStrokeWidth: 2,
            datasetFill: true,
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
        },
        initialize: function(data) {
            this.PointClass = Chart.Point.extend({
                strokeWidth: this.options.pointDotStrokeWidth,
                radius: this.options.pointDotRadius,
                display: this.options.pointDot,
                hitDetectionRadius: this.options.pointHitDetectionRadius,
                ctx: this.chart.ctx
            });
            this.datasets = [];
            this.buildScale(data);
            this.options.showTooltips && helpers.bindEvents(this, this.options.tooltipEvents, function(evt) {
                var activePointsCollection = "mouseout" !== evt.type ? this.getPointsAtEvent(evt) : [];
                this.eachPoints(function(point) {
                    point.restore([ "fillColor", "strokeColor" ]);
                });
                helpers.each(activePointsCollection, function(activePoint) {
                    activePoint.fillColor = activePoint.highlightFill;
                    activePoint.strokeColor = activePoint.highlightStroke;
                });
                this.showTooltip(activePointsCollection);
            });
            helpers.each(data.datasets, function(dataset) {
                var datasetObject = {
                    label: dataset.label || null,
                    fillColor: dataset.fillColor,
                    strokeColor: dataset.strokeColor,
                    pointColor: dataset.pointColor,
                    pointStrokeColor: dataset.pointStrokeColor,
                    points: []
                };
                this.datasets.push(datasetObject);
                helpers.each(dataset.data, function(dataPoint, index) {
                    if (helpers.isNumber(dataPoint)) {
                        var pointPosition;
                        this.scale.animation || (pointPosition = this.scale.getPointPosition(index, this.scale.calculateCenterOffset(dataPoint)));
                        datasetObject.points.push(new this.PointClass({
                            value: dataPoint,
                            label: data.labels[index],
                            datasetLabel: dataset.label,
                            x: this.options.animation ? this.scale.xCenter : pointPosition.x,
                            y: this.options.animation ? this.scale.yCenter : pointPosition.y,
                            strokeColor: dataset.pointStrokeColor,
                            fillColor: dataset.pointColor,
                            highlightFill: dataset.pointHighlightFill || dataset.pointColor,
                            highlightStroke: dataset.pointHighlightStroke || dataset.pointStrokeColor
                        }));
                    }
                }, this);
            }, this);
            this.render();
        },
        eachPoints: function(callback) {
            helpers.each(this.datasets, function(dataset) {
                helpers.each(dataset.points, callback, this);
            }, this);
        },
        getPointsAtEvent: function(evt) {
            var mousePosition = helpers.getRelativePosition(evt), fromCenter = helpers.getAngleFromPoint({
                x: this.scale.xCenter,
                y: this.scale.yCenter
            }, mousePosition);
            var anglePerIndex = 2 * Math.PI / this.scale.valuesCount, pointIndex = Math.round((fromCenter.angle - 1.5 * Math.PI) / anglePerIndex), activePointsCollection = [];
            (pointIndex >= this.scale.valuesCount || 0 > pointIndex) && (pointIndex = 0);
            fromCenter.distance <= this.scale.drawingArea && helpers.each(this.datasets, function(dataset) {
                activePointsCollection.push(dataset.points[pointIndex]);
            });
            return activePointsCollection;
        },
        buildScale: function(data) {
            this.scale = new Chart.RadialScale({
                display: this.options.showScale,
                fontStyle: this.options.scaleFontStyle,
                fontSize: this.options.scaleFontSize,
                fontFamily: this.options.scaleFontFamily,
                fontColor: this.options.scaleFontColor,
                showLabels: this.options.scaleShowLabels,
                showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                backdropColor: this.options.scaleBackdropColor,
                backdropPaddingY: this.options.scaleBackdropPaddingY,
                backdropPaddingX: this.options.scaleBackdropPaddingX,
                lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                lineColor: this.options.scaleLineColor,
                angleLineColor: this.options.angleLineColor,
                angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
                pointLabelFontColor: this.options.pointLabelFontColor,
                pointLabelFontSize: this.options.pointLabelFontSize,
                pointLabelFontFamily: this.options.pointLabelFontFamily,
                pointLabelFontStyle: this.options.pointLabelFontStyle,
                height: this.chart.height,
                width: this.chart.width,
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2,
                ctx: this.chart.ctx,
                templateString: this.options.scaleLabel,
                labels: data.labels,
                valuesCount: data.datasets[0].data.length
            });
            this.scale.setScaleSize();
            this.updateScaleRange(data.datasets);
            this.scale.buildYLabels();
        },
        updateScaleRange: function(datasets) {
            var valuesArray = function() {
                var totalDataArray = [];
                helpers.each(datasets, function(dataset) {
                    dataset.data ? totalDataArray = totalDataArray.concat(dataset.data) : helpers.each(dataset.points, function(point) {
                        totalDataArray.push(point.value);
                    });
                });
                return totalDataArray;
            }();
            var scaleSizes = this.options.scaleOverride ? {
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            } : helpers.calculateScaleRange(valuesArray, helpers.min([ this.chart.width, this.chart.height ]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
            helpers.extend(this.scale, scaleSizes);
        },
        addData: function(valuesArray, label) {
            this.scale.valuesCount++;
            helpers.each(valuesArray, function(value, datasetIndex) {
                if (helpers.isNumber(value)) {
                    var pointPosition = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(value));
                    this.datasets[datasetIndex].points.push(new this.PointClass({
                        value: value,
                        label: label,
                        x: pointPosition.x,
                        y: pointPosition.y,
                        strokeColor: this.datasets[datasetIndex].pointStrokeColor,
                        fillColor: this.datasets[datasetIndex].pointColor
                    }));
                }
            }, this);
            this.scale.labels.push(label);
            this.reflow();
            this.update();
        },
        removeData: function() {
            this.scale.valuesCount--;
            this.scale.labels.shift();
            helpers.each(this.datasets, function(dataset) {
                dataset.points.shift();
            }, this);
            this.reflow();
            this.update();
        },
        update: function() {
            this.eachPoints(function(point) {
                point.save();
            });
            this.reflow();
            this.render();
        },
        reflow: function() {
            helpers.extend(this.scale, {
                width: this.chart.width,
                height: this.chart.height,
                size: helpers.min([ this.chart.width, this.chart.height ]),
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            });
            this.updateScaleRange(this.datasets);
            this.scale.setScaleSize();
            this.scale.buildYLabels();
        },
        draw: function(ease) {
            var easeDecimal = ease || 1, ctx = this.chart.ctx;
            this.clear();
            this.scale.draw();
            helpers.each(this.datasets, function(dataset) {
                helpers.each(dataset.points, function(point, index) {
                    point.transition(this.scale.getPointPosition(index, this.scale.calculateCenterOffset(point.value)), easeDecimal);
                }, this);
                ctx.lineWidth = this.options.datasetStrokeWidth;
                ctx.strokeStyle = dataset.strokeColor;
                ctx.beginPath();
                helpers.each(dataset.points, function(point, index) {
                    0 === index ? ctx.moveTo(point.x, point.y) : ctx.lineTo(point.x, point.y);
                }, this);
                ctx.closePath();
                ctx.stroke();
                ctx.fillStyle = dataset.fillColor;
                ctx.fill();
                helpers.each(dataset.points, function(point) {
                    point.draw();
                });
            }, this);
        }
    });
}).call(this);