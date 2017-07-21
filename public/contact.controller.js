(function () {
    var app = angular.module("ContactApp");
    app.controller("ContactCtrl", ContactCtrl);

    function ContactCtrl(ContactDataSvc) {
        var self = this;
        self.editMode =false;
      //  this.contacts = ContactDataSvc.contacts;

         ContactDataSvc.getContacts()
             .then(function (data) {
                 self.contacts = data.data.contacts;
             })

        this.selectContact = function (index) {
            this.selectedContact = this.contacts[index];
        }

        this.toggleEditMode = function () {
            this.editMode = !this.editMode;
        }

        this.update = function () {
            this.toggleEditMode();
            var userData = this.selectedContact;
            ContactDataSvc.update(userData);
        }
        
        this.add = function () {
            var userData = new Contact(this.first_name,this.last_name);
           //this.contacts.push(new Contact(this.name.first,this.name.last));
            ContactDataSvc.add(userData);
        }

        var Contact = function (first_name,last_name){
            this.first_name = first_name;
            this.last_name = last_name;

        }

        this.delete = function () {
            var userData = this.selectedContact;
            ContactDataSvc.delete(userData);
        }

    }
})();
