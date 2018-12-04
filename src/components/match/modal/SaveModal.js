import React, {Component} from "react";

const $ = window.$;

class SaveModal extends Component{
    constructor(props){
        super(props);
        this.state = {
            competitorName: "",
            competitorGoal: 0,
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState({
            submitted: true
        });

        const {competitorName, competitorGoal} = this.state;
        const {onSave} = this.props;
        if(competitorName && competitorGoal && !isNaN(competitorGoal)){
            onSave(competitorName, competitorGoal);
            $("#saveModal").modal("hide");
        }
    }

    render(){
        const {competitorName, competitorGoal, submitted} = this.state;

        return(
            <div className="modal fade" id="saveModal" tabIndex="-1" role="dialog" aria-labelledby="saveModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="saveModalLabel">Save</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="competitorName" className="col-form-label">Competitor Name:</label>
                                    <input type="text" className="form-control" name="competitorName" onChange={this.handleChange} value={competitorName}/>
                                    {submitted && !competitorName &&
                                    <small className="form-text">CompetitorName is required</small>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="competitorGoal" className="col-form-label">Competitor Score:</label>
                                    <input type="text" className="form-control" name="competitorGoal" onChange={this.handleChange} value={competitorGoal}/>
                                    {submitted && (!competitorGoal || isNaN(competitorGoal)) &&
                                    <small className="form-text">CompetitorScore should be number</small>}
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export {SaveModal};