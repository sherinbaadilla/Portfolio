document.addEventListener("DOMContentLoaded", () => {
    const movingText = document.querySelector(".moving-text");
    const asciiElement = document.querySelector(".ascii-art");
    const terminal = document.createElement("div");
    terminal.className = "mini-terminal";
    terminal.style.display = "none"; // Initially hidden
    document.body.appendChild(terminal);

    const text = "Welcome to the Matrix...";
    
    let index = 0;

    // Generate random letters
    function generateRandomLetters() {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const randomLetter = letters.charAt(Math.floor(Math.random() * letters.length));
        const letterElement = document.createElement("span");
        letterElement.textContent = randomLetter;
        letterElement.style.position = "absolute";
        letterElement.style.color = "green";
        letterElement.style.fontSize = "20px";
        letterElement.style.opacity = Math.random();
        letterElement.style.left = Math.random() * window.innerWidth + "px";
        letterElement.style.top = Math.random() * window.innerHeight + "px";
        document.body.appendChild(letterElement);

        // Animate the letter towards the center
        const moveLetter = () => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const angle = Math.atan2(centerY - parseFloat(letterElement.style.top), centerX - parseFloat(letterElement.style.left));
            const distance = 2; // Speed of movement towards the center

            letterElement.style.left = parseFloat(letterElement.style.left) + Math.cos(angle) * distance + "px";
            letterElement.style.top = parseFloat(letterElement.style.top) + Math.sin(angle) * distance + "px";

            if (Math.abs(parseFloat(letterElement.style.left) - centerX) < 5 && Math.abs(parseFloat(letterElement.style.top) - centerY) < 5) {
                document.body.removeChild(letterElement);
            } else {
                requestAnimationFrame(moveLetter);
            }
        };
        moveLetter();
    }

    // Set interval to generate letters
    setInterval(generateRandomLetters, 100); // Increased frequency of letter generation

    function typeEffect() {
        if (index < text.length) {
            movingText.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        } else {
            setTimeout(() => {
                movingText.textContent = "";
                index = 0;
                typeEffect();
            }, 2000);
        }
    }

    

    // Efek glitch pada teks
    function glitchEffect(element) {
        const text = element.textContent;
        let glitchInterval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * text.length);
            const glitchChar = String.fromCharCode(33 + Math.random() * 94);
            const glitchedText = text.split("").map((char, i) =>
                i === randomIndex ? glitchChar : char
            ).join("");
            element.textContent = glitchedText;
        }, 100);

        setTimeout(() => {
            clearInterval(glitchInterval);
            element.textContent = text;
        }, 2000);
    }

    // ASCII art functionality
    const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", () => {
        terminal.style.display = "block"; // Show terminal on ASCII art click
        terminal.innerHTML = `
            <div style="display: flex; justify-content: space-between;">
                <div>
                    <strong>Nama:</strong> Muhammad Sherin Baadilla<br>
                    <strong>Jurusan:</strong> Sistem Informasi<br>
                    <strong>Universitas:</strong> STMIK PONTIANAK<br>
                    <strong>Minat Utama:</strong> Memasak, Web Development, AI<br>
                </div>
                <div>
                    <img src="avatar.png" alt="Avatar" style="width:50px;height:50px;">
                </div>
            </div>
            <hr>
            <strong>Tentang Saya:</strong><br>
             

Haloo.. Teman-Teman Saya Sherin Saya lahir di Pontianak pada tanggal 9 Juli 2004. Saya merupakan anak pertama dari dua bersaudara dalam keluarga kecil kami. Kehadiran adik saya membawa warna dalam kehidupan, sekaligus menjadi motivasi bagi saya untuk terus menjadi contoh yang baik. <br> <br>

Sejak kecil, saya memiliki ketertarikan pada berbagai hal yang melibatkan kreativitas dan keterampilan. Salah satu hobi yang menjadi bagian penting dari hidup saya adalah memasak. Kegiatan ini tidak hanya menjadi cara untuk berekspresi, tetapi juga memberikan saya kebahagiaan tersendiri ketika menciptakan hidangan yang bisa dinikmati oleh orang lain.  <br> <br>

Selain itu, dunia teknologi adalah salah satu minat terbesar saya. Saya sangat tertarik dengan perkembangan teknologi, terutama dalam bidang pembuatan website dan kecerdasan buatan (AI). Meskipun saya masih berada di tahap awal dalam pengembangan website, semangat belajar terus mendorong saya untuk menggali lebih dalam. Membuat sesuatu yang bermanfaat melalui teknologi adalah tujuan yang ingin saya capai.  <br> <br>

Dalam perjalanan hidup, saya memiliki harapan besar untuk masa depan. Saya bercita-cita menjadi seorang pengusaha sukses yang tidak hanya mampu menciptakan lapangan kerja, tetapi juga memberikan dampak positif bagi masyarakat. Impian saya adalah mencapai kebebasan finansial, memiliki bisnis yang berkembang, dan mampu membantu orang lain melalui pencapaian saya.  <br> <br>

Saya percaya bahwa perjalanan untuk mencapai kesuksesan dimulai dari langkah kecil. Saat ini, saya terus berusaha belajar dan berkembang, memanfaatkan setiap kesempatan untuk meningkatkan kemampuan saya, baik dalam dunia kuliner maupun teknologi. Dengan ketekunan, kerja keras, dan doa, saya yakin bahwa mimpi besar saya akan terwujud di masa yang akan datang.  <br> <br>

Ini adalah gambaran singkat tentang saya, perjalanan yang sedang saya jalani, dan harapan besar yang terus memotivasi saya setiap hari.<br> <br>
            <strong>Keterampilan:</strong> HTML, CSS, JavaScript, PHP, Python, Dan SQL<br>
            <hr>
            <strong>Proyek:</strong><br>
            <div class="project-card">
                <strong>Proyek 1:</strong> Portfolio Website<br>
                Deskripsi: Sebuah situs web portofolio yang menampilkan proyek dan keterampilan saya.<br>
                Link: <a href="https://example.com/portfolio" target="_blank">Demo</a><br>
            </div>

            <hr>
            <strong>Kontak:</strong><br>
            <form>
                <label for="name">Nama:</label><br>
                <input type="text" id="name" name="name"><br>
                <label for="email">Email:</label><br>
                <input type="email" id="email" name="email"><br>
                <label for="message">Pesan:</label><br>
                <textarea id="message" name="message"></textarea><br>
                <input type="submit" value="Kirim">
            </form>
            <hr>
            <strong>Media Sosial:</strong><br>
            <a href="https://www.instagram.com/sherinbaadilla?igsh=dm9ucjg0bzlxemln" target="_blank">Instagram</a>
            <a href="https://www.tiktok.com/@hujanairgula?_t=ZS-8tE24Y8nyML&_r=1" target="_blank">TikTok</a>
            <a href="mailto:Sherin.pnk@gmail.com" target="_blank">Gmail</a><br><br>
            <button id="closeButton" style="margin-top: 10px;">Close</button>
        `;

        // Close button functionality
        const closeButton = document.getElementById("closeButton");
        closeButton.addEventListener("click", () => {
            terminal.style.display = "none"; // Hide terminal on close button click
        });
    });

    // Aktifkan semua efek
    typeEffect();
    setInterval(() => glitchEffect(movingText), 3000);
});
