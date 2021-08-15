import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionList from './questionsList'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class Dashboard extends Component {
    render() {
        console.log(this.props.answeredIDs)
        console.log(this.props.unAnsweredIDs)
        return (
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Unanswered Questions</Tab>
                        <Tab>Answered Questions</Tab>
                    </TabList>
                    <TabPanel>
                        <div>
                            <ul>
                                {this.props.unAnsweredIDs.map((id)=>(
                                    <li key={id}>
                                        <QuestionList id={id} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <ul>
                                {this.props.answeredIDs.map((id)=>(
                                    <li key={id}>
                                        <QuestionList id={id} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
            
        )
    }
}

function mapStateToProps ({questions, users, authedUser}) {
    const allIDs = Object.keys(questions)
    const answeredIDs = Object.keys(users[authedUser].answers)
    const unAnsweredIDs = allIDs.filter(item=> !answeredIDs.includes(item))

    return {
        answeredIDs,
        unAnsweredIDs,
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(Dashboard)