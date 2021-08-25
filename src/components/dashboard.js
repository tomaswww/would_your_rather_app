import React, { Component } from 'react'
import '../App.css';
import { connect } from 'react-redux'
import QuestionList from './questionsList'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


class Dashboard extends Component {
    render() {
        return (
            <div className='App-body'>
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
                                            <QuestionList id={id}/>
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