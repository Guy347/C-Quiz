/* ===============================
   GLOBAL GAME STATE
   =============================== */

const GameState = {
    player: {
        name: "",
        score: 0,
        correct: 0,
        wrong: 0,
        currentIndex: 0
    },
    config: {
        totalQuestions: 60,
        scorePerCorrect: 10,
        timePerQuestion: 25
    },
    runtime: {
        timer: null,
        timeLeft: 0,
        isLocked: false
    },
    questions: [] // ข้อมูลคำถามจะอยู่ด้านล่าง
};

/* ==========================================================
   QUESTION DATASET
   ========================================================== */

GameState.questions = [
    /* ========================= 1 - 10 : BASIC SYNTAX ========================= */
    {
        question: "ข้อใดคือโครงสร้างหลักของโปรแกรมภาษา C",
        choices: [
            "#include <stdio.h>",
            "int main() { return 0; }",
            "printf(\"Hello\");",
            "using namespace std;"
        ],
        correct: 1
    },
    {
        question: "คำสั่งใดใช้แสดงผลข้อความในภาษา C",
        choices: [
            "cin",
            "cout",
            "print()",
            "printf()"
        ],
        correct: 3
    },
    {
        question: "ชนิดข้อมูลใดใช้เก็บค่าจำนวนเต็ม",
        choices: [
            "float",
            "double",
            "char",
            "int"
        ],
        correct: 3
    },
    {
        question: "เครื่องหมายใดใช้จบคำสั่งในภาษา C",
        choices: [
            ":",
            ";",
            ".",
            ","
        ],
        correct: 1
    },
    {
        question: "ข้อใดคือคอมเมนต์แบบบรรทัดเดียวในภาษา C",
        choices: [
            "/* comment */",
            "",
            "// comment",
            "# comment"
        ],
        correct: 2
    },
    {
        question: "ฟังก์ชัน main() มีหน้าที่ใด",
        choices: [
            "รับค่าจากผู้ใช้",
            "เป็นจุดเริ่มต้นของโปรแกรม",
            "แสดงผลข้อมูล",
            "ประกาศตัวแปร"
        ],
        correct: 1
    },
    {
        question: "ข้อใดประกาศตัวแปร int ถูกต้อง",
        choices: [
            "int a = 5;",
            "a int = 5;",
            "int = a 5;",
            "integer a = 5;"
        ],
        correct: 0
    },
    {
        question: "ข้อใดคือค่าคงที่แบบตัวอักษร",
        choices: [
            "\"A\"",
            "A",
            "'A'",
            "char"
        ],
        correct: 2
    },
    {
        question: "ชนิดข้อมูลใดใช้เก็บตัวอักษร 1 ตัว",
        choices: [
            "int",
            "float",
            "char",
            "string"
        ],
        correct: 2
    },
    {
        question: "ข้อใดเป็นคำสั่งรับค่าจากผู้ใช้",
        choices: [
            "printf",
            "scanf",
            "cin",
            "input"
        ],
        correct: 1
    },

    /* ========================= 11 - 20 : OPERATOR & LOGIC ========================= */
    {
        question: "เครื่องหมาย == ใช้ทำอะไร",
        choices: [
            "กำหนดค่า",
            "เปรียบเทียบ",
            "เพิ่มค่า",
            "ลบค่า"
        ],
        correct: 1
    },
    {
        question: "ผลลัพธ์ของ 5 % 2 คืออะไร",
        choices: [
            "1",
            "2",
            "2.5",
            "0"
        ],
        correct: 0
    },
    {
        question: "เครื่องหมาย && หมายถึงอะไร",
        choices: [
            "หรือ",
            "ไม่",
            "และ",
            "หาร"
        ],
        correct: 2
    },
    {
        question: "ถ้า a = 5, b = 3 ค่า a > b เป็นอะไร",
        choices: [
            "จริง",
            "เท็จ",
            "ผิดพลาด",
            "ไม่มีค่า"
        ],
        correct: 0
    },
    {
        question: "เครื่องหมาย ++a คืออะไร",
        choices: [
            "เพิ่มค่าหลังใช้งาน",
            "เพิ่มค่าก่อนใช้งาน",
            "ลดค่า",
            "ไม่เปลี่ยนค่า"
        ],
        correct: 1
    },
    {
        question: "เครื่องหมาย != ใช้ทำอะไร",
        choices: [
            "เท่ากับ",
            "ไม่เท่ากับ",
            "มากกว่า",
            "น้อยกว่า"
        ],
        correct: 1
    },
    {
        question: "ข้อใดคือ operator ทางตรรกะ",
        choices: [
            "+",
            "*",
            "&&",
            "%"
        ],
        correct: 2
    },
    {
        question: "ผลลัพธ์ของ !(1) คืออะไร",
        choices: [
            "1",
            "0",
            "-1",
            "error"
        ],
        correct: 1
    },
    {
        question: "ค่าความจริงในภาษา C ใช้ค่าใดแทน true",
        choices: [
            "0",
            "-1",
            "1",
            "2"
        ],
        correct: 2
    },
    {
        question: "ค่าความจริงในภาษา C ใช้ค่าใดแทน false",
        choices: [
            "0",
            "1",
            "-1",
            "true"
        ],
        correct: 0
    },

    /* ========================= 21 - 30 : CONTROL STRUCTURE ========================= */
    {
        question: "คำสั่ง if ใช้ทำอะไร",
        choices: [
            "วนซ้ำ",
            "เลือกเงื่อนไข",
            "แสดงผล",
            "รับค่า"
        ],
        correct: 1
    },
    {
        question: "คำสั่ง else ทำงานเมื่อใด",
        choices: [
            "เมื่อ if เป็นจริง",
            "เมื่อ if เป็นเท็จ",
            "ทุกครั้ง",
            "ไม่เคยทำงาน"
        ],
        correct: 1
    },
    {
        question: "โครงสร้าง if ที่ถูกต้องคือข้อใด",
        choices: [
            "if a > b {}",
            "if (a > b) {}",
            "if {a > b}",
            "if a > b ()"
        ],
        correct: 1
    },
    {
        question: "คำสั่ง switch ใช้แทนโครงสร้างใด",
        choices: [
            "for",
            "while",
            "if-else หลายเงื่อนไข",
            "do-while"
        ],
        correct: 2
    },
    {
        question: "คำสั่ง break ใช้ทำอะไร",
        choices: [
            "ออกจาก loop หรือ switch",
            "ข้ามรอบ",
            "หยุดโปรแกรม",
            "ลบตัวแปร"
        ],
        correct: 0
    },
    {
        question: "คำสั่ง continue ใช้ทำอะไร",
        choices: [
            "หยุด loop",
            "ข้ามรอบปัจจุบัน",
            "ออกจากโปรแกรม",
            "รีสตาร์ท loop"
        ],
        correct: 1
    },
    {
        question: "คำสั่ง for เหมาะกับกรณีใด",
        choices: [
            "รู้จำนวนรอบแน่นอน",
            "ไม่รู้จำนวนรอบ",
            "ไม่มีเงื่อนไข",
            "ใช้แทน if"
        ],
        correct: 0
    },
    {
        question: "คำสั่ง while จะทำงานเมื่อใด",
        choices: [
            "ก่อนตรวจเงื่อนไข",
            "หลังตรวจเงื่อนไข",
            "ไม่ตรวจเงื่อนไข",
            "เฉพาะครั้งแรก"
        ],
        correct: 1
    },
    {
        question: "คำสั่ง do-while ต่างจาก while อย่างไร",
        choices: [
            "ทำงานอย่างน้อย 1 ครั้ง",
            "ไม่ใช้เงื่อนไข",
            "เร็วกว่า",
            "ไม่มี loop"
        ],
        correct: 0
    },
    {
        question: "ข้อใดคือ loop",
        choices: [
            "if",
            "switch",
            "for",
            "case"
        ],
        correct: 2
    },

    /* ========================= 31 - 40 : ARRAY & STRING ========================= */
    {
        question: "Array ใช้เก็บข้อมูลแบบใด",
        choices: [
            "ข้อมูลหลายชนิด",
            "ข้อมูลชนิดเดียวกันหลายค่า",
            "ข้อมูลแบบสุ่ม",
            "ข้อมูล 1 ค่า"
        ],
        correct: 1
    },
    {
        question: "index ของ array เริ่มต้นที่เท่าใด",
        choices: [
            "1",
            "0",
            "-1",
            "ขึ้นอยู่กับชนิดข้อมูล"
        ],
        correct: 1
    },
    {
        question: "การประกาศ array ที่ถูกต้องคือข้อใด",
        choices: [
            "int a(5);",
            "array int a[5];",
            "int a[5];",
            "int [5] a;"
        ],
        correct: 2
    },
    {
        question: "string ในภาษา C เก็บในรูปแบบใด",
        choices: [
            "char",
            "int",
            "array of char",
            "object"
        ],
        correct: 2
    },
    {
        question: "อักขระสิ้นสุด string คืออะไร",
        choices: [
            "/0",
            "\\0",
            "null",
            "end"
        ],
        correct: 1
    },
    {
        question: "strlen() ใช้ทำอะไร",
        choices: [
            "คัดลอก string",
            "เปรียบเทียบ string",
            "หาความยาว string",
            "รวม string"
        ],
        correct: 2
    },
    {
        question: "strcmp() ใช้ทำอะไร",
        choices: [
            "รวม string",
            "คัดลอก string",
            "เปรียบเทียบ string",
            "แยก string"
        ],
        correct: 2
    },
    {
        question: "strcpy() ใช้ทำอะไร",
        choices: [
            "เปรียบเทียบ",
            "คัดลอก",
            "ลบ",
            "นับ"
        ],
        correct: 1
    },
    {
        question: "array 1 มิติใช้ index กี่ตัว",
        choices: [
            "1",
            "2",
            "3",
            "ไม่ใช้ index"
        ],
        correct: 0
    },
    {
        question: "array 2 มิติเหมาะกับข้อมูลแบบใด",
        choices: [
            "ข้อความ",
            "ตาราง",
            "ตัวเลขเดียว",
            "boolean"
        ],
        correct: 1
    },

    /* ========================= 41 - 60 : FUNCTION & POINTER ========================= */
    {
        question: "ฟังก์ชันใช้ทำอะไร",
        choices: [
            "เก็บข้อมูล",
            "แยกการทำงาน",
            "วนซ้ำ",
            "เปรียบเทียบ"
        ],
        correct: 1
    },
    {
        question: "ข้อใดคือการเรียกฟังก์ชัน",
        choices: [
            "int sum();",
            "sum;",
            "sum();",
            "function sum"
        ],
        correct: 2
    },
    {
        question: "return ใช้ทำอะไร",
        choices: [
            "หยุดโปรแกรม",
            "คืนค่า",
            "แสดงผล",
            "รับค่า"
        ],
        correct: 1
    },
    {
        question: "ฟังก์ชันที่ไม่คืนค่าใช้ชนิดใด",
        choices: [
            "int",
            "float",
            "void",
            "char"
        ],
        correct: 2
    },
    {
        question: "pointer ใช้ทำอะไร",
        choices: [
            "เก็บค่า",
            "เก็บที่อยู่",
            "เก็บ string",
            "เก็บ array"
        ],
        correct: 1
    },
    {
        question: "เครื่องหมายใดใช้ประกาศ pointer",
        choices: [
            "&",
            "*",
            "#",
            "%"
        ],
        correct: 1
    },
    {
        question: "& ใช้ทำอะไร",
        choices: [
            "หาค่า",
            "หาที่อยู่",
            "คูณ",
            "เปรียบเทียบ"
        ],
        correct: 1
    },
    {
        question: "*ptr หมายถึงอะไร",
        choices: [
            "ที่อยู่",
            "ค่าที่ pointer ชี้",
            "ชื่อ pointer",
            "ชนิดข้อมูล"
        ],
        correct: 1
    },
    {
        question: "pointer ช่วยให้เกิดประโยชน์ใด",
        choices: [
            "โปรแกรมช้าลง",
            "ใช้หน่วยความจำมากขึ้น",
            "ส่งค่าระหว่างฟังก์ชัน",
            "ลบตัวแปร"
        ],
        correct: 2
    },
    {
        question: "ข้อใดกล่าวถูกต้องเกี่ยวกับ pointer",
        choices: [
            "pointer เก็บค่าโดยตรง",
            "pointer เก็บที่อยู่หน่วยความจำ",
            "pointer ใช้แทน array เสมอ",
            "pointer ไม่จำเป็น"
        ],
        correct: 1
    }
];

/* ==========================================================
   START GAME CONTROLLER
   ========================================================== */

function startGameUI() {
    const input = document.getElementById("playerName");

    if (!input) {
        alert("ไม่พบช่องกรอกชื่อผู้เล่น");
        return;
    }

    const name = input.value.trim();

    if (name.length < 2) {
        alert("กรุณากรอกชื่ออย่างน้อย 2 ตัวอักษร");
        return;
    }

    // เก็บชื่อผู้เล่น
    localStorage.setItem("C_PLAYER_NAME", name);

    // รีเซ็ต state เกม
    GameState.player.name = name;
    GameState.player.score = 0;
    GameState.player.correct = 0;
    GameState.player.wrong = 0;
    GameState.player.currentIndex = 0;

    // สร้างหน้าเกม
    buildGameScreen();

    // โหลดคำถามข้อแรก
    loadQuestion();
}

/* ==========================================================
   BUILD GAME SCREEN
   ========================================================== */

function buildGameScreen() {
    const app = document.querySelector(".app-container");

    app.innerHTML = `
        <div class="game-wrapper">
            <div class="game-header">
                <div class="player-info">
                    👤 ${GameState.player.name}
                </div>
                <div class="score-info">
                    คะแนน: <span id="scoreValue">0</span>
                </div>
            </div>

            <div class="progress-bar">
                <div class="progress-fill" id="progressFill"></div>
            </div>

            <div class="timer-box">
                ⏱ เวลา: <span id="timeValue">0</span> วินาที
            </div>

            <div class="question-box">
                <div class="question-number" id="questionNumber">
                    คำถามข้อที่ 1
                </div>
                <div class="question-text" id="questionText">
                    Loading...
                </div>
            </div>

            <div class="answer-box" id="answerBox">
                </div>
        </div>
    `;

    injectGameStyle();
}

/* ==========================================================
   INJECT GAME STYLE
   ========================================================== */

function injectGameStyle() {
    // ป้องกันการสร้าง style ซ้ำ
    if (document.getElementById("game-dynamic-style")) return;

    const style = document.createElement("style");
    style.id = "game-dynamic-style";
    style.innerHTML = `
        .game-wrapper {
            max-width: 900px;
            margin: auto;
            animation: fadeUp 0.8s ease;
        }
        .game-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            font-weight: 600;
        }
        .progress-bar {
            width: 100%;
            height: 10px;
            background: rgba(255,255,255,0.15);
            border-radius: 999px;
            overflow: hidden;
            margin-bottom: 20px;
        }
        .progress-fill {
            height: 100%;
            width: 0%;
            background: linear-gradient(135deg, #6a00ff, #ff4ecd);
            transition: width 0.4s ease;
        }
        .timer-box {
            margin-bottom: 20px;
            font-size: 14px;
            color: #facc15;
        }
        .question-box {
            background: rgba(255,255,255,0.08);
            padding: 30px;
            border-radius: 18px;
            margin-bottom: 30px;
        }
        .question-number {
            font-size: 14px;
            margin-bottom: 10px;
            color: #ff4ecd;
        }
        .question-text {
            font-size: 20px;
            line-height: 1.6;
        }
        .answer-box {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        .answer-btn {
            padding: 18px;
            border-radius: 14px;
            border: none;
            cursor: pointer;
            background: rgba(255,255,255,0.15);
            color: white;
            font-size: 15px;
            transition: all 0.25s ease;
        }
        .answer-btn:hover {
            background: rgba(255,255,255,0.25);
            transform: translateY(-2px);
        }
        .answer-btn.correct {
            background: #2dd4bf;
            color: #003333;
            font-weight: 600;
        }
        .answer-btn.wrong {
            background: #fb7185;
            color: #330000;
            font-weight: 600;
        }
        .answer-btn.disabled {
            pointer-events: none;
            opacity: 0.6;
        }
        @media (max-width: 600px) {
            .answer-box {
                grid-template-columns: 1fr;
            }
        }
    `;
    document.head.appendChild(style);
}

/* ==========================================================
   LOAD QUESTION
   ========================================================== */

function loadQuestion() {
    GameState.runtime.isLocked = false;

    // ตรวจสอบว่าจบเกมหรือยัง
    if (GameState.player.currentIndex >= GameState.questions.length) {
        endGame();
        return;
    }

    const q = GameState.questions[GameState.player.currentIndex];

    document.getElementById("questionNumber").innerText =
        `คำถามข้อที่ ${GameState.player.currentIndex + 1} / ${GameState.questions.length}`;

    document.getElementById("questionText").innerText = q.question;

    const answerBox = document.getElementById("answerBox");
    answerBox.innerHTML = "";

    q.choices.forEach((choice, index) => {
        const btn = document.createElement("button");
        btn.className = "answer-btn";
        btn.innerText = choice;
        btn.onclick = () => selectAnswer(index, btn);
        answerBox.appendChild(btn);
    });

    updateProgress();
    startTimer();
}

/* ==========================================================
   TIMER SYSTEM
   ========================================================== */

function startTimer() {
    clearInterval(GameState.runtime.timer);

    GameState.runtime.timeLeft = GameState.config.timePerQuestion;
    const timeEl = document.getElementById("timeValue");
    if(timeEl) timeEl.innerText = GameState.runtime.timeLeft;

    GameState.runtime.timer = setInterval(() => {
        GameState.runtime.timeLeft--;
        const t = document.getElementById("timeValue");
        if(t) t.innerText = GameState.runtime.timeLeft;

        if (GameState.runtime.timeLeft <= 0) {
            clearInterval(GameState.runtime.timer);
            lockAnswers();
            markWrong(null);
        }
    }, 1000);
}

/* ==========================================================
   ANSWER HANDLER
   ========================================================== */

function selectAnswer(index, button) {
    if (GameState.runtime.isLocked) return;

    GameState.runtime.isLocked = true;
    clearInterval(GameState.runtime.timer);

    const q = GameState.questions[GameState.player.currentIndex];

    if (index === q.correct) {
        markCorrect(button);
    } else {
        markWrong(button);
    }

    setTimeout(() => {
        GameState.player.currentIndex++;
        loadQuestion();
    }, 1500);
}

/* ==========================================================
   CORRECT / WRONG
   ========================================================== */

function markCorrect(button) {
    GameState.player.score += GameState.config.scorePerCorrect;
    GameState.player.correct++;

    document.getElementById("scoreValue").innerText = GameState.player.score;

    button.classList.add("correct");
    lockAnswers();
}

function markWrong(button) {
    GameState.player.wrong++;

    const q = GameState.questions[GameState.player.currentIndex];
    const buttons = document.querySelectorAll(".answer-btn");

    // เฉลยข้อที่ถูก
    if(buttons[q.correct]) {
        buttons[q.correct].classList.add("correct");
    }

    // แสดงสีแดงที่ปุ่มที่กดผิด
    if (button) {
        button.classList.add("wrong");
    }

    lockAnswers();
}

/* ==========================================================
   LOCK ANSWERS
   ========================================================== */

function lockAnswers() {
    document.querySelectorAll(".answer-btn")
        .forEach(btn => btn.classList.add("disabled"));
}

/* ==========================================================
   PROGRESS BAR
   ========================================================== */

function updateProgress() {
    const percent =
        ((GameState.player.currentIndex) / GameState.questions.length) * 100;
    const fill = document.getElementById("progressFill");
    if(fill) fill.style.width = percent + "%";
}

/* ==========================================================
   END GAME
   ========================================================== */

function endGame() {
    const app = document.querySelector(".app-container");

    app.innerHTML = `
        <div class="result-screen">
            <h1>🎉 สรุปผลการทดสอบ</h1>
            <p>ผู้เล่น: ${GameState.player.name}</p>
            <p>คะแนนรวม: ${GameState.player.score}</p>
            <p>ตอบถูก: ${GameState.player.correct}</p>
            <p>ตอบผิด: ${GameState.player.wrong}</p>

            <button class="btn-primary" onclick="location.reload()">
                เล่นอีกครั้ง
            </button>
        </div>
    `;

    injectResultStyle();
}

/* ==========================================================
   RESULT STYLE
   ========================================================== */

function injectResultStyle() {
    const style = document.createElement("style");
    style.innerHTML = `
        .result-screen {
            text-align: center;
            margin-top: 120px;
            animation: fadeUp 1s ease;
        }
        .result-screen h1 {
            font-size: 36px;
            margin-bottom: 20px;
        }
        .result-screen p {
            font-size: 18px;
            margin-bottom: 12px;
            color: #d1d1d1;
        }
        .btn-primary {
             margin-top: 20px;
             max-width: 200px;
        }
    `;
    document.head.appendChild(style);
}