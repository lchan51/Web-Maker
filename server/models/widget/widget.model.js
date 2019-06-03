const mongoose = require("mongoose");
const WidgetSchema = require("./widget.schema");
const WidgetModel = mongoose.model("WidgetModel", WidgetSchema);

WidgetModel.createWidget = (widget) => {
    return WidgetModel.create(widget);
}

WidgetModel.findWidgetsForPage = (pid) => {
    return WidgetModel.find ({pageId: pid});
}

WidgetModel.findWidget = (wgid) => {
    return WidgetModel.findById (wgid)
}

WidgetModel.deleteWidget = (wgid) => {
    return WidgetModel.deleteOne({_id: wgid})
    }

WidgetModel.updateWidget = (widget) => {
    return WidgetModel.updateOne({_id: widget._id}, widget)
    }

    module.exports = WidgetModel