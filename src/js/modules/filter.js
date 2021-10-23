const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          no = document.querySelector('.portfolio-no');

    const typeFilter  = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIN');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIN');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIN');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIN');
        }
    };

    function addEvent(menu, wrapper) {
        menu.addEventListener('click', (e) => {
            e.preventDefault();
        
            switch (e.target.classList[0]) {
                case 'all' :
                    typeFilter(wrapper.querySelectorAll('.all'));
                    console.log(1);
                    break;
                case 'lovers' :
                    typeFilter(wrapper.querySelectorAll('.lovers'));
                    break;
                case 'chef' :
                    typeFilter(wrapper.querySelectorAll('.chef'));
                    break;
                case 'girl' :
                    typeFilter(wrapper.querySelectorAll('.girl'));
                    break;
                case 'guy' :
                    typeFilter(wrapper.querySelectorAll('.guy'));
                    break;
                case 'grandmother' :
                    typeFilter();
                    break;
                case 'granddad' :
                    typeFilter();
                    break;
            }
        });
    }

    addEvent(menu, wrapper);

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName == "LI") {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    });

};

export default filter;