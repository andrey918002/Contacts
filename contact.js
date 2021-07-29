class Contact{
    constructor(name, surname, phone, homePhone){
        this.name = name;
        this.surname = surname;
        this.phone = phone;
        this.homePhone = homePhone;
    }
    render(li1, li2, li3, li4){
        li1.innerText = this.name;
        li2.innerText = this.surname;
        li3.innerText = this.phone;
        li4.innerText = this.homePhone;
    }
}
class ContactsAndSocialNеtworks extends Contact{
    constructor(name, surname, phone, homePhone, nicknameTelegram, nicknameFacebook, nicknameInstagram){
        super(name, surname, phone, homePhone, nicknameTelegram, nicknameFacebook, nicknameInstagram);
        this.nicknameTelegram = nicknameTelegram;
        this.nicknameFacebook = nicknameFacebook;
        this.nicknameInstagram = nicknameInstagram;
    }
    render(li1, li2, li3, li4, li5, li6, li7){
        super.render(li1, li2, li3, li4, li5, li6, li7);
        li5.innerText = this.nicknameTelegram;
        li6.innerText = this.nicknameFacebook;
        li7.innerText = this.nicknameInstagram;
    }
}
class ContactsBook{
    constructor(){
        this.contacts = new Array();
        this.contacts.push(new ContactsAndSocialNеtworks("Vasya", "Ivanov", 952314538, 497865, "Vaska", "Vasiliy" ,"Vasyok"));
        this.contacts.push(new ContactsAndSocialNеtworks( "Vanya", "Petrov", 654248254, 497832, "None", "Ivanich", "Vano"));
        this.contacts.push(new ContactsAndSocialNеtworks( "Vova", "Sidorov", 349456478, 654379, "Vladimir", "None", "Vovka"));
    }
    delete(num){
        console.log("Delete " + num);
        this.contacts.splice(num, 1);
        this.render();
    }
    showDelInfo(number, delLi1, delLi2, delLi3, delLi4, delLi5, delLi6, delLi7){
        delLi1.innerHTML = "Name: <br>" + this.contacts[number].name;
        delLi2.innerHTML = "Surname: <br>" + this.contacts[number].surname;
        delLi3.innerHTML = "Phone: <br>" + this.contacts[number].phone;
        delLi4.innerHTML = "Home Phone: <br>" + this.contacts[number].homePhone;
        delLi5.innerHTML = "Telegram: <br>" + this.contacts[number].nicknameTelegram;
        delLi6.innerHTML = "Facebook: <br>" + this.contacts[number].nicknameFacebook;
        delLi7.innerHTML = "Instagram: <br>" + this.contacts[number].nicknameInstagram;
    }
    showDelInfo2(number, label1, label2, label3, label4, label5, label6, label7){
        label1.innerText = "Name: \"" + this.contacts[number].name + "\" edit to";
        label2.innerText = "Surname: \"" + this.contacts[number].surname + "\" edit to";
        label3.innerText = "Phone: \"" + this.contacts[number].phone + "\" edit to";
        label4.innerText = "Home Phone: \"" + this.contacts[number].homePhone + "\" edit to";
        label5.innerText = "Telegram: \"" + this.contacts[number].nicknameTelegram + "\" edit to";
        label6.innerText = "Facebook: \"" + this.contacts[number].nicknameFacebook + "\" edit to";
        label7.innerText = "Instagram: \"" + this.contacts[number].nicknameInstagram + "\" edit to";
    }
    add(num1, num2, num3, num4, num5, num6, num7){
        this.contacts.push(new ContactsAndSocialNеtworks(num1, num2, num3, num4, num5, num6, num7));
        this.render();
    }
    edit(num, val1, val2, val3, val4, val5, val6, val7){
        this.contacts.splice(num, 1, new ContactsAndSocialNеtworks(val1, val2, val3, val4, val5, val6, val7));
        this.render();
    }
    render(){
        let headerMain = document.createElement("h1");
        headerMain.innerText = "Contacts List";
        let ul = document.createElement("ul");
        let liHeader1 = document.createElement("li");
        liHeader1.innerText = "Name";
        liHeader1.style.fontWeight = "bold";
        liHeader1.style.fontSize = "20px";
        let liHeader2 = document.createElement("li");
        liHeader2.innerText = "Surname";
        liHeader2.style.fontWeight = "bold";
        liHeader2.style.fontSize = "20px";
        let liHeader3 = document.createElement("li");
        liHeader3.innerText = "Phone";
        liHeader3.style.fontWeight = "bold";
        liHeader3.style.fontSize = "20px";
        let liHeader4 = document.createElement("li");
        liHeader4.innerText = "Home Phone";
        liHeader4.style.fontWeight = "bold";
        liHeader4.style.fontSize = "20px";
        let liHeader5 = document.createElement("li");
        liHeader5.innerText = "Telegram";
        liHeader5.style.fontWeight = "bold";
        liHeader5.style.fontSize = "20px";
        let liHeader6 = document.createElement("li");
        liHeader6.innerText = "FaceBook";
        liHeader6.style.fontWeight = "bold";
        liHeader6.style.fontSize = "20px";
        let liHeader7 = document.createElement("li");
        liHeader7.innerText = "Instagram";
        liHeader7.style.fontWeight = "bold";
        liHeader7.style.fontSize = "20px";
        let liHeader8 = document.createElement("li");
        liHeader8.innerText = "Del";
        liHeader8.style.fontWeight = "bold";
        liHeader8.style.fontSize = "20px";
        let liHeader9 = document.createElement("li");
        liHeader9.innerText = "Edit";
        liHeader9.style.fontWeight = "bold";
        liHeader9.style.fontSize = "20px";
        ul.appendChild(liHeader1);
        ul.appendChild(liHeader2);
        ul.appendChild(liHeader3);
        ul.appendChild(liHeader4);
        ul.appendChild(liHeader5);
        ul.appendChild(liHeader6);
        ul.appendChild(liHeader7);
        ul.appendChild(liHeader8);
        ul.appendChild(liHeader9);
        for (let i = 0; i < this.contacts.length; i++){
            let li1 = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            let li4 = document.createElement("li");
            let li5 = document.createElement("li");
            let li6 = document.createElement("li");
            let li7 = document.createElement("li");
            let li8 = document.createElement("li");
            let li9 = document.createElement("li");
            let del = document.createElement("a");
            let icon1 = document.createElement("img");
            icon1.src = "img/red.svg";
            del.href = "#modalWindow";
            icon1.classList.add("imgStyle");
            del.onclick = function(){
                let modalDel = document.getElementById("windowContent");
                modalDel.innerText = "";
                let headerDel = document.createElement("h1");
                headerDel.innerText = "Cut Contact";
                let delUl = document.createElement("ul");
                delUl.classList.add("delUl");
                let delLi1 = document.createElement("li");
                let delLi2 = document.createElement("li");
                let delLi3 = document.createElement("li");
                let delLi4 = document.createElement("li");
                let delLi5 = document.createElement("li");
                let delLi6 = document.createElement("li");
                let delLi7 = document.createElement("li");
                let submitDel = document.createElement("a");
                submitDel.innerText = "Delete this contact";
                submitDel.classList = "submitDel";
                submitDel.href = "#";
                let delClose = document.createElement("a");
                delClose.classList.add("windowClose");
                let imgDel = document.createElement("img");
                imgDel.src = "img/close.svg";
                imgDel.classList.add("imgStyle");
                delClose.href = "#";
                cont.showDelInfo(i, delLi1, delLi2, delLi3, delLi4, delLi5, delLi6, delLi7);
                submitDel.onclick = function(){
                    cont.delete(i);
                };
                delClose.appendChild(imgDel);
                modalDel.appendChild(delClose);
                delUl.appendChild(delLi1);
                delUl.appendChild(delLi2);
                delUl.appendChild(delLi3);
                delUl.appendChild(delLi4);
                delUl.appendChild(delLi5);
                delUl.appendChild(delLi6);
                delUl.appendChild(delLi7);
                modalDel.appendChild(headerDel);
                modalDel.appendChild(delUl);
                modalDel.appendChild(submitDel);
            };
            let red = document.createElement("a");
            red.href = "#modalWindow";
            let icon2 = document.createElement("img");
            icon2.src = "img/close.svg";
            icon2.classList.add("imgStyle");
            red.onclick = function(){
                let modalRed = document.getElementById("windowContent");
                modalRed.innerText = "";
                let headerRed = document.createElement("h1");
                headerRed.innerText = "Edit Contacts";
                let labelRed1 = document.createElement("label");
                labelRed1.innerText = "";
                let inputRed1 = document.createElement("input");
                inputRed1.value = "";
                let labelRed2 = document.createElement("label");
                labelRed2.innerText = "";
                let inputRed2 = document.createElement("input");
                inputRed2.value = "";
                let labelRed3 = document.createElement("label");
                labelRed3.innerText = "";
                let inputRed3 = document.createElement("input");
                inputRed3.value = "";
                let labelRed4 = document.createElement("label");
                labelRed4.innerText = "";
                let inputRed4 = document.createElement("input");
                inputRed4.value = "";
                let labelRed5 = document.createElement("label");
                labelRed5.innerText = "";
                let inputRed5 = document.createElement("input");
                inputRed5.value = "";
                let labelRed6 = document.createElement("label");
                labelRed6.innerText = "";
                let inputRed6 = document.createElement("input");
                inputRed6.value = "";
                let labelRed7 = document.createElement("label");
                labelRed7.innerText = "";
                let inputRed7 = document.createElement("input");
                inputRed7.value = "";
                let redSubmit = document.createElement("a");
                redSubmit.innerText = "Edit";
                redSubmit.classList.add("add");
                redSubmit.href = "#";
                let redClose = document.createElement("a");
                redClose.classList.add("windowClose");
                let imgClose = document.createElement("img");
                imgClose.src = "img/close.svg";
                imgClose.classList.add("imgStyle");
                redClose.href = "#";
                cont.showDelInfo2(i, labelRed1, labelRed2, labelRed3, labelRed4, labelRed5, labelRed6, labelRed7);
                redSubmit.onclick = function(){
                    cont.edit(i, inputRed1.value, inputRed2.value, inputRed3.value, inputRed4.value, inputRed5.value, inputRed6.value, inputRed7.value);
                };
                redClose.appendChild(imgClose);
                modalRed.appendChild(redClose);
                modalRed.appendChild(headerRed);
                modalRed.appendChild(labelRed1);
                modalRed.appendChild(inputRed1);
                modalRed.appendChild(labelRed2);
                modalRed.appendChild(inputRed2);
                modalRed.appendChild(labelRed3);
                modalRed.appendChild(inputRed3);
                modalRed.appendChild(labelRed4);
                modalRed.appendChild(inputRed4);
                modalRed.appendChild(labelRed5);
                modalRed.appendChild(inputRed5);
                modalRed.appendChild(labelRed6);
                modalRed.appendChild(inputRed6);
                modalRed.appendChild(labelRed7);
                modalRed.appendChild(inputRed7);
                modalRed.appendChild(redSubmit);
            };
            let id = "Contact_" + i;
            this.contacts[i].render(li1, li2, li3, li4, li5, li6, li7);
            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            ul.appendChild(li5);
            ul.appendChild(li6);
            ul.appendChild(li7);
            ul.appendChild(li8);
            li8.appendChild(del);
            ul.appendChild(li9);
            li9.appendChild(red);
            del.appendChild(icon2);
            red.appendChild(icon1);
        }
        let add = document.createElement("a");
        add.href = "#modalWindow";
        add.innerText = "Add contact";
        add.classList.add("add");
        add.onclick = function(){
            let modalAdd = document.getElementById("windowContent");
            modalAdd.innerText = "";
            let headerAdd = document.createElement("h1");
            headerAdd.innerText = "Add Contacts";
            let labelAdd1 = document.createElement("label");
            labelAdd1.innerText = "Name: ";
            let inputAdd1 = document.createElement("input");
            let labelAdd2 = document.createElement("label");
            labelAdd2.innerText = "Surname: ";
            let inputAdd2 = document.createElement("input");
            let labelAdd3 = document.createElement("label");
            labelAdd3.innerText = "Phone: ";
            let inputAdd3 = document.createElement("input");
            let labelAdd4 = document.createElement("label");
            labelAdd4.innerText = "Home Phone: ";
            let inputAdd4 = document.createElement("input");
            let labelAdd5 = document.createElement("label");
            labelAdd5.innerText = "Telegram: ";
            let inputAdd5 = document.createElement("input");
            let labelAdd6 = document.createElement("label");
            labelAdd6.innerText = "Facebook: ";
            let inputAdd6 = document.createElement("input");
            let labelAdd7 = document.createElement("label");
            labelAdd7.innerText = "Instagram: ";
            let inputAdd7 = document.createElement("input");
            let addSubmit = document.createElement("a");
            addSubmit.innerText = "Add";
            addSubmit.classList.add("add");
            addSubmit.href = "#";
            let addClose = document.createElement("a");
            addClose.classList.add("windowClose");
            let imgAdd = document.createElement("img");
            imgAdd.src = "img/close.svg";
            imgAdd.classList.add("imgStyle");
            addClose.href = "#";
            addSubmit.onclick = function(){
                cont.add(inputAdd1.value, inputAdd2.value, inputAdd3.value, inputAdd4.value, inputAdd5.value, inputAdd6.value, inputAdd7.value);
            };
            addClose.appendChild(imgAdd);
            modalAdd.appendChild(addClose);
            modalAdd.appendChild(headerAdd);
            modalAdd.appendChild(labelAdd1);
            modalAdd.appendChild(inputAdd1);
            modalAdd.appendChild(labelAdd2);
            modalAdd.appendChild(inputAdd2);
            modalAdd.appendChild(labelAdd3);
            modalAdd.appendChild(inputAdd3);
            modalAdd.appendChild(labelAdd4);
            modalAdd.appendChild(inputAdd4);
            modalAdd.appendChild(labelAdd5);
            modalAdd.appendChild(inputAdd5);
            modalAdd.appendChild(labelAdd6);
            modalAdd.appendChild(inputAdd6);
            modalAdd.appendChild(labelAdd7);
            modalAdd.appendChild(inputAdd7);
            modalAdd.appendChild(addSubmit);
        };
        document.getElementById("app").innerHTML = "";
        document.getElementById("app").appendChild(headerMain);
        document.getElementById("app").appendChild(ul);
        document.getElementById("app").appendChild(add);
    }
}

let cont = new ContactsBook();
cont.render();