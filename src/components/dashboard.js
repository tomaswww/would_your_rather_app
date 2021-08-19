import React, { Component } from 'react'
import '../App.css';
import { connect } from 'react-redux'
import QuestionList from './questionsList'
import NewQuestion from './newQuestion';
import ScoreCard from './scoreCard';
import LeaderBoard from './leaderBoard';
import QuestionDetails from './questionDetails';
import Login from './login';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


class Dashboard extends Component {
    render() {
        const { authedUser } = this.props
        const { users } = this.props
        return (
            <div className="App">
                <Tabs>
                    <TabList>
                        <div className="App-header">
                            <div className="tabs">
                                <Tab>Home</Tab>
                                <Tab>New Question</Tab>
                                <Tab>Leader Board</Tab>
                                <Tab>Login</Tab>
                                <Tab>Question Details</Tab>
                            </div>
                            <div className="user-info">
                                <span>Hello! {users[authedUser].name}</span>
                                <img 
                                    className="header-avatar" 
                                    src={users[authedUser].avatarURL}/>
                                <button>Logout</button>
                            </div>
                        </div>
                    </TabList>
                    <TabPanel>
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
                    </TabPanel>
                    <TabPanel>
                            <NewQuestion />
                    </TabPanel>
                    <TabPanel>
                            <LeaderBoard />
                    </TabPanel>
                    <TabPanel>
                            <Login />
                    </TabPanel>
                    <TabPanel>
                            <QuestionDetails />
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