let Vue = require('vue');

Vue.component('optionSelectDropdown', {
    props: {
        dropdownTitle: String, 
        dropdownEntries: Array,
        entrySelection: String
    },
    data: function () {
        return {
            selected: this.entrySelection != "" ? this.entrySelection : "Select a field"
        };
    },
    methods: {
        handleChange: function () {
            
        }
    },
    template: `
        <div>
           {{ dropdownTitle }}
                <select v-model="selected" @change="handleChange">
                    <option disabled value="Select a field">Select a field</option>
                    <option v-for="entry in dropdownEntries">
                        {{ entry }}
                    </option>
                </select>
        </div>
    `
});

let vm = new Vue ({
    el: '#form',
    data: {
        dropdownTitle: "Pick a calculation to use on the target related records field.",
        dropdownEntries: [
            "Sum",
            "Count"
        ],
        selection: ""
    },
    template: `
        <div>
            <optionSelectDropdown
                v-bind:dropdown-title="this.dropdownTitle"
                v-bind:dropdown-entries="this.dropdownEntries"
                v-bind:entry-selection="this.selection"
            />
        </div>
    `
});