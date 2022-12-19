
document.querySelectorAll('.style').forEach(btn => btn.addEventListener('click', btn =>{
    document.querySelectorAll('.style').forEach(btn =>{btn.classList.remove('active')})
    let style=btn.target.firstChild;
    if (style.nextSibling ==null){
        btn.target.parentNode.classList.add('active')
        style=btn.target.firstChild.textContent;
    } else{
        console.log
        btn.target.classList.add('active')
        style=style.nextSibling.textContent;

    }
    fetch('js/data.json').then(res=> res.json()).then(data => {
        var age=
        {
            '18—20 лет': 0,
            '15—17 лет': 0,
            '21—23 года': 0,
            '23—25 лет': 0,
            'более 25 лет': 0,
        }
        let lesson=
        {
            'Программирование': 0,
            'Математика': 0,
            'Физика': 0,
            'Обществознание': 0,
            'Химия': 0,
            'Литература': 0,
            'История': 0,
            'Искусство': 0,
            'Языки': 0,
        }
        let perf= {
            'На отлично': 0,
            'Хорошо': 0,
            'Нормально': 0,
            'Не очень': 0,
            'Плоховато': 0,
        }
        data.forEach(answer => {
            flag=0
            answer.forEach(check=>{
                if (check.includes(style)){
                    flag=1;

                }
            })
            if (flag===1 ){
                age[answer[3][1]]+=1
                answer.forEach(check=>{
                    if (lesson[check[1]]!=undefined)
                    lesson[check[1]]+=1
                    if (perf[check[1]]!=undefined)
                    perf[check[1]]+=1
                })
            }
        });
        const age_max=Math.max(...Object.values(age))
        const age_name=Object.keys(age)[Object.values(age).indexOf(age_max)]
        const lesson_max=Math.max(...Object.values(lesson))
        const lesson_name=Object.keys(lesson)[Object.values(lesson).indexOf(lesson_max)]
        const perf_max=Math.max(...Object.values(perf))
        const perf_name=Object.keys(perf)[Object.values(perf).indexOf(perf_max)]
        document.querySelector('.statistic_perf').textContent=perf_name
        document.querySelector('.statistic_lesson').textContent=lesson_name
        document.querySelector('.statistic_age').textContent=age_name
    })

}))