import React, {Component, Fragment} from "react";

const $ = window.$;

class TeamRecordViewModal extends Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        $("#teamRecordViewModal").modal("hide");
    }

    render(){
        const {matchRecord} = this.props;

        return(
            <div className="modal fade" id="teamRecordViewModal" tabIndex="-1" role="dialog" aria-labelledby="teamRecordViewModalLabel" aria-hidden="true" onClick={this.onClick}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="teamRecordViewModalLabel">Match Record</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <Fragment>
                                    <div className="row justify-content-center">
                                        <div className="col-8">
                                            <button type="button" className="btn btn-outline-primary btn-block">Goal({matchRecord.goal})</button>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-8">
                                            <button type="button" className="btn btn-outline-success btn-block">Assist({matchRecord.assist})</button>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-8">
                                            <button type="button" className="btn btn-outline-secondary btn-block">Shot({matchRecord.shot})</button>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-8">
                                            <button type="button" className="btn btn-outline-dark btn-block">ShotOnTarget({matchRecord.shotOnTarget})</button>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-8">
                                            <button type="button" className="btn btn-outline-success btn-block">Pass({matchRecord.pass})</button>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-8">
                                            <button type="button" className="btn btn-outline-warning btn-block">YellowCard({matchRecord.yellowCard})</button>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-8">
                                            <button type="button" className="btn btn-outline-danger btn-block">RedCard({matchRecord.redCard})</button>
                                        </div>
                                    </div>
                                </Fragment>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export {TeamRecordViewModal};