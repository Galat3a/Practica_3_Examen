export class Check {
    constructor(parent,client) {
        this.parent = parent;
        this.client = client;
        this.states = [];
    }
    //cambio de valor en el sapan, para que al marcar el check se cambie el valor de ON a OFF (usando data-set)
    changeValue(name, value) {
        const data = this.states.find((item) => item.name == name);
        if (data) {
            data.state = value;
            const label = this.parent.querySelector(`label[data-name="${name}"] span`);
            if (label) {
                label.textContent = value ? 'ON' : 'OFF';
            }
        }
        
    }

    addCheck(name) {
        this.states.push({
            name : name,
            state : false
        })
        const check = document.createElement("label");
        check.classList.add("form-switch");
        check.setAttribute('data-name', name);
        this.parent.appendChild(check);
        const input = document.createElement("input");
        input.setAttribute('type', 'checkbox');
        check.appendChild(input);
        check.appendChild(document.createElement("i"));
        const span = document.createElement('span');
        const text = document.createTextNode('OFF');
        span.appendChild(text);
        check.appendChild(span);
        input.addEventListener('change', (event)=> {
            this.changeValue(name, event.target.checked);
        })
    }
}