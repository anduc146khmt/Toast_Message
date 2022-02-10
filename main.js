const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const app = {
    buttons : 
    [
        {
            status: 'success',
            text : 'Show success toast',
        },
        {
            status: 'info',
            text: 'Show info toast',
        },
        {  
            status: 'warning',
            text: 'Show warning toast',
        },
        {
            status: 'error',
            text: 'Show error toast',
        }
    ],
    messages : [
        {
            message: 'success__message',
            status: 'Success',
            icon: 'fa-circle-check',
            color: 'green',
            text : 'Sign in your account successfully.',
        },
        {
            message: 'info__message',
            status: 'Info',
            icon: 'fa-circle-info',
            color: 'blue',
            text: 'Your email address has been confirmed.',
        },
        {  
            message: 'warning__message',
            status: 'Warning',
            icon: 'fa-circle-exclamation',
            color: 'yellow',
            text: 'Some information is missing from your account.',
        },
        {
            message: 'error__message',
            status: 'Error',
            icon: 'fa-circle-xmark',
            color: 'orange',
            text: 'Some error has occurred. Please contact your administrator.',
        }
    ],
    renderBrowsers: function() {
        var btnHtmls = this.buttons.map(function(button) {
            return `
            <div class="toast__element ${button.status}">
                <p>${button.text}</p>
            </div>`
        });
        var contentHtmls = this.messages.map(function(content) {
            return `
                <div class="toast__message ${content.message}">
                <div class="message">
                    <i class="fa-solid ${content.icon} ${content.color}"></i>
                    <div class="message__text">
                        <h3>${content.status}</h3>
                        <p>${content.text}</p>
                    </div>
                </div>
                <i class="fa fa-times grey"></i>
            </div>
            `;
        })
        $('.toast__button').innerHTML = btnHtmls.join('');
        $('.toast__content').innerHTML = contentHtmls.join('');
    },
    clickBtn: function() {
       this.buttons.forEach(function(button) {
            $(`.${button.status}`).onclick = function() {
                if($('.active')) $('.active').classList.remove('active');
                $(`.${button.status}__message`).classList.add('active');
            }
       })
    },
    closeBtn: function() {
        $$('.fa-times').forEach(function(closeBtn){
            closeBtn.onclick = function() {
                this.offsetParent.classList.remove('active');
            }
        })
    },
    start: function() {
        this.renderBrowsers();
        this.clickBtn();
        this.closeBtn();
    }
}
app.start();