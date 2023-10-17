document.addEventListener("DOMContentLoaded", () => {

    const playagain = () => {
        window.location.reload();
    }

    document.querySelectorAll('.modal .modal-action .btn')[0].addEventListener('click', function (){
        playagain();
    });
    //Health Intialize
    let p1_hp = 100;
    let cpu_hp = 100;

    //Moves inputs
    let usermove;

    //buttons functionality
    let movesbtns = document.querySelectorAll('.input-section .btn');
    for (i of movesbtns) {
        i.addEventListener('click', function () {
            let cpuI = Math.random() * 5;
            cpuI = Math.floor(cpuI);
            let cpu = ["p", "lp", "b", "lb", "c"][cpuI];

            clicked_move = this.getAttribute('data-move');
            usermove = clicked_move;

            if (usermove === cpu) {
                
            }
            else if (usermove === 'p' && cpu === 'lp') {
                document.getElementById('p1status').innerHTML = 'Player 1 Used Punch';
                document.getElementById('cpustatus').innerHTML = 'CPU 1 Used Lower Punch';
                p1_hp = p1_hp - 10;
                cpu_hp = cpu_hp - 10;
                document.querySelectorAll('.points .p1 span')[0].innerHTML = p1_hp;
                document.querySelectorAll('.points .p2 span')[0].innerHTML = cpu_hp;
                document.querySelectorAll('.points .p1 .progress')[0].setAttribute("value", p1_hp);
                document.querySelectorAll('.points .p2 .progress')[0].setAttribute("value", cpu_hp);
            }
            else if (usermove === 'p' && cpu === 'b') {
                document.getElementById('p1status').innerHTML = 'Player 1 Used Punch';
                document.getElementById('cpustatus').innerHTML = 'CPU 1 Used Block';
            }
            else if (usermove === 'p' && cpu === 'lb') {
                document.getElementById('p1status').innerHTML = 'Player 1 Used Punch';
                document.getElementById('cpustatus').innerHTML = 'CPU 1 Used Lower Block';
                cpu_hp = cpu_hp - 10;
                document.querySelectorAll('.points .p2 span')[0].innerHTML = cpu_hp;
                document.querySelectorAll('.points .p2 .progress')[0].setAttribute("value", cpu_hp);
            }

            else if (usermove === 'lp' && cpu === 'p') {
                document.getElementById('p1status').innerHTML = 'Player 1 Used Lower Punch';
                document.getElementById('cpustatus').innerHTML = 'CPU 1 Used Punch';
                p1_hp = p1_hp - 10;
                cpu_hp = cpu_hp - 10;
                document.querySelectorAll('.points .p1 span')[0].innerHTML = p1_hp;
                document.querySelectorAll('.points .p2 span')[0].innerHTML = cpu_hp;
                document.querySelectorAll('.points .p1 .progress')[0].setAttribute("value", p1_hp);
                document.querySelectorAll('.points .p2 .progress')[0].setAttribute("value", cpu_hp);
            }
            else if (usermove === 'lp' && cpu === 'b') {
                document.getElementById('p1status').innerHTML = 'Player 1 Used Lower Punch';
                document.getElementById('cpustatus').innerHTML = 'CPU 1 Used Block';
                cpu_hp = cpu_hp - 10;
                document.querySelectorAll('.points .p2 span')[0].innerHTML = cpu_hp;
                document.querySelectorAll('.points .p2 .progress')[0].setAttribute("value", cpu_hp);
            }
            else if (usermove === 'lp' && cpu === 'lb') {
                document.getElementById('p1status').innerHTML = 'Player 1 Used Lower Punch';
                document.getElementById('cpustatus').innerHTML = 'CPU 1 Used Lower Block';
            }

            else if (usermove === 'b' && cpu === 'p') {
                document.getElementById('p1status').innerHTML = 'Player 1 Used Block';
                document.getElementById('cpustatus').innerHTML = 'CPU 1 Used Punch';
            }
            else if (usermove === 'b' && cpu === 'lb') {
                document.getElementById('p1status').innerHTML = 'Player 1 Used Block';
                document.getElementById('cpustatus').innerHTML = 'CPU 1 Used Lower Block';
            }
            else if (usermove === 'b' && cpu === 'lp') {
                document.getElementById('p1status').innerHTML = 'Player 1 Used Block';
                document.getElementById('cpustatus').innerHTML = 'CPU 1 Used Lower Punch';
                p1_hp = p1_hp - 10;
                document.querySelectorAll('.points .p1 span')[0].innerHTML = p1_hp;
                document.querySelectorAll('.points .p1 .progress')[0].setAttribute("value", p1_hp);
            }

            else if (usermove === 'lb' && cpu === 'p') {
                document.getElementById('p1status').innerHTML = 'Player 1 Used Lower Block';
                document.getElementById('cpustatus').innerHTML = 'CPU 1 Used Punch';
                p1_hp = p1_hp - 10;
                document.querySelectorAll('.points .p1 span')[0].innerHTML = p1_hp;
                document.querySelectorAll('.points .p1 .progress')[0].setAttribute("value", p1_hp);
            }
            else if (usermove === 'lb' && cpu === 'lp') {
                document.getElementById('p1status').innerHTML = 'Player 1 Used Lower Block';
                document.getElementById('cpustatus').innerHTML = 'CPU 1 Used Lower Punch';
            }
            else if (usermove === 'lb' && cpu === 'b') {
                document.getElementById('p1status').innerHTML = 'Player 1 Used Lower Block';
                document.getElementById('cpustatus').innerHTML = 'CPU 1 Used Block';
            }

            else if (usermove === 'p' && cpu === 'c') {
                document.getElementById('p1status').innerHTML = 'Player 1 Used Punch';
                document.getElementById('cpustatus').innerHTML = 'CPU 1 Used Super Special Counter';
                p1_hp = p1_hp - 30;
                document.querySelectorAll('.points .p1 span')[0].innerHTML = p1_hp;
                document.querySelectorAll('.points .p1 .progress')[0].setAttribute("value", p1_hp);
            }

            else if (usermove === 'lp' && cpu === 'c') {
                document.getElementById('p1status').innerHTML = 'Player 1 Used Lower Punch';
                document.getElementById('cpustatus').innerHTML = 'CPU 1 Used Super Special Counter';
                p1_hp = p1_hp - 30;
                document.querySelectorAll('.points .p1 span')[0].innerHTML = p1_hp;
                document.querySelectorAll('.points .p1 .progress')[0].setAttribute("value", p1_hp);
            }

            if (p1_hp <= 0) {
                document.querySelectorAll('.modal h3')[0].innerHTML = "Sorry!"
                document.querySelectorAll('.modal p')[0].innerHTML = "Mr CPU Won"
                result_modal.showModal()
            } else if(cpu_hp <= 0) {
                document.querySelectorAll('.modal h3')[0].innerHTML = "Yea!"
                document.querySelectorAll('.modal p')[0].innerHTML = "You Won"
                result_modal.showModal()
            }
        });
    }
})