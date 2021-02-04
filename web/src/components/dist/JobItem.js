"use strict";
exports.__esModule = true;
exports.JobItem = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = require("react");
;
[];
exports.JobItem = function (_a) {
    var theJob = _a.theJob;
    //  state Edit job
    var _b = react_2.useState(null), editJob = _b[0], setEditJob = _b[1];
    function onJobDelete(jobId) {
        setAllJob(function (prevAllJob) {
            return prevAllJob.filter(function (theJob) { return theJob.id !== jobId; });
        });
    }
    return (react_2["default"].createElement("div", null,
        react_2["default"].createElement(react_1.Box, { mt: 4, p: 3, bg: '#f1f1f1', borderRadius: 5 },
            react_2["default"].createElement(react_1.Text, { px: 4, fontSize: '3xl' }, theJob.jobContent),
            react_2["default"].createElement(react_1.Text, { px: 4, fontSize: 'md' }, theJob.comment),
            react_2["default"].createElement(react_1.Button, { onClick: function () {
                    setEditJob(theJob);
                }, bg: '#f1f1f1', _hover: {
                    bgColor: '#f1f1f1',
                    color: '#a4b85d'
                } }, "Edit"),
            react_2["default"].createElement("span", null, " | "),
            react_2["default"].createElement(react_1.Button, { onClick: function () {
                    onJobDelete(theJob.id);
                }, bg: '#f1f1f1', _hover: {
                    bgColor: '#f1f1f1',
                    color: '#c25f5f'
                } }, "Delete"))));
};
