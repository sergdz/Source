

const modals = (state) => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');


        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();


                }




                const stateLength = Object.keys(state).length

                console.log(e.target.className);

                switch (e.target.className) {
                    case 'button popup_calc_button'  :
                         if (stateLength < 3) {

                            e.target.style.border = '1px solid black';
                           return
                         }

                    console.log(stateLength);
                    case 'button popup_calc_profile_button'  :
                         if (stateLength < 5) {

                            e.target.style.border = '1px solid black';
                           return
                         }

                    console.log(stateLength);
                    break


                }



                windows.forEach(item => {
                    item.style.display = 'none';
                })

                modal.style.display = 'block';
                document.body.classList.add('modal-open')
            });
        })

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            })
            modal.style.display = 'none';
            document.body.style.overflow = '';
             document.body.classList.add('modal-open')


        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                })
                console.log(e.target)

                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.classList.remove('modal-open')
            }
        });

    }

    function showModalByTime(selector, time) {
        setTimeout(function () {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }


    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', ' .popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    /* bindModal('.text-uppercase.btn-block.button', '.popup_form', '.popup_calc_end_close', false); */



    /*  showModalByTime('.popup', 60000) */

}
export default modals