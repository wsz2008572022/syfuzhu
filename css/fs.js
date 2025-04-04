        // 动态更新时间
        const updateDate = new Date();
        document.getElementById('updateInfo').innerHTML = `
            最新版本 ${updateDate.getFullYear()}.${updateDate.getMonth()+1}.${updateDate.getDate()} | 
            新增存档编辑功能 | 优化UI交互
        `;
    
        // 版本号显示
        document.getElementById('version').textContent = 
            `${updateDate.getFullYear()}.${updateDate.getMonth()+1}.${updateDate.getDate()}`;
    
        // 滚动动画
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
    
        document.querySelectorAll('.feature-card').forEach(card => observer.observe(card));
    
        // 导航栏滚动效果
        window.addEventListener('scroll', () => {
            document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 50);
        });
    
        // 更新日志提示
        document.querySelector('.update-info').addEventListener('click', () => {
            alert(`完整更新日志：\n\n${updateDate.toLocaleDateString()} 版本更新\n- 新增存档编辑1.0\n- 优化UI响应速度30%\n- 修复已知兼容性问题`);
        });
    
        // 蓝奏云下载按钮事件 (新增部分)
        document.querySelectorAll('.download-btn').forEach(btn => {
            if (btn.textContent.trim() === '蓝奏云下载') {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    alert('密码:1234');
                    // 实际部署时可替换为：
                    window.open('https://wwvt.lanzoum.com/i3dKF2sni66j');
                });
            }
        });
        const coreValues = [
            "富强", "民主", "文明", "和谐",
            "自由", "平等", "公正", "法治",
            "爱国", "敬业", "诚信", "友善"
        ];

        // 渐变色集合
        const gradients = [
            "linear-gradient(45deg, #ff3366, #ff6600)",
            "linear-gradient(45deg, #ffcc00, #33cc33)",
            "linear-gradient(45deg, #00cccc, #3399ff)",
            "linear-gradient(45deg, #9933ff, #ff3366)"
        ];

        // 节流函数优化性能
        let lastTime = 0;
        const throttle = (func, delay) => {
            return function(...args) {
                const now = Date.now();
                if (now - lastTime >= delay) {
                    func.apply(this, args);
                    lastTime = now;
                }
            }
        }

        // 创建文字元素
        const createCoreText = (x, y) => {
            const text = document.createElement('div');
            text.className = 'core-text';
            
            // 随机样式
            text.textContent = coreValues[Math.floor(Math.random() * coreValues.length)];
            text.style.background = gradients[Math.floor(Math.random() * gradients.length)];
            text.style.webkitBackgroundClip = 'text';
            text.style.backgroundClip = 'text';
            text.style.color = 'transparent';
            text.style.fontSize = Math.floor(24 + Math.random() * 24) + 'px';
            
            // 定位
            text.style.left = x + 'px';
            text.style.top = y + 'px';

            document.body.appendChild(text);

            // 自动移除
            setTimeout(() => text.remove(), 1500);
        }

        // 优化后的鼠标移动处理
        document.addEventListener('click', throttle((e) => {
            createCoreText(e.clientX, e.clientY);
        }, 100)); // 每100ms触发一次

        // 移动端适配
        document.addEventListener('click', throttle((e) => {
            const touch = e.touches[0];
            createCoreText(touch.clientX, touch.clientY);
        }, 100));