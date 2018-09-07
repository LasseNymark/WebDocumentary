var video2 = document.getElementById('trommespil'), fraction = 0.8;

                function checkScroll() {
                    var k = video2.offsetLeft, p = video2.offsetTop, o = video2.offsetWidth, l = video2.offsetHeight, j = k + o, //right
                    n = p + l, //bottom
                    visibleX, visibleY, visible;

                    visibleX = Math.max(0, Math.min(o, window.pageXOffset + window.innerWidth - k, j - window.pageXOffset));
                    visibleY = Math.max(0, Math.min(l, window.pageYOffset + window.innerHeight - p, n - window.pageYOffset));

                    visible = visibleX * visibleY / (o * l);

                    if (visible > fraction) {
                        video2.play();
                    } else {
                        video2.pause();
                    }
                } checkScroll();
                window.addEventListener('scroll', checkScroll, false);
                window.addEventListener('resize', checkScroll, false);