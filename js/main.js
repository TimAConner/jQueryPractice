"use strict";

const $ = require("jquery");

const userFactory = require("./userFactory");

$("select").change(() => {
    let selectedUser = $(this).val();
    userFactory.getUsers(selectedUser);
});