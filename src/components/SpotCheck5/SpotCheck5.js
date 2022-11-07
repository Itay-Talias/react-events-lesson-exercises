import React, { Component } from "react";
import Task from "./Task";
class SpotCheck5 extends Component {
    // Each task should be desplayed with a Task component.
    // Each Task should display the task's text, and a Complete button with the class "complete"
    // However, SpotCheck5 should filter out the tasks whose complete is true
    // Clicking the Complete button should change that task's complete to true in App's state

    constructor() {
        super();
        this.state = {
            tasks: [
                { text: "Take out trash", complete: true },
                { text: "Trash talk Carrie", complete: true },
                { text: "Carry boxes upstairs", complete: true },
            ],
        };
    }

    markComplete = (text) => {
        const currentTasks = [...this.state.tasks];
        currentTasks.find((T) => T.text === text).complete = false;

        this.setState({
            tasks: currentTasks,
        });
    };

    render() {
        return (
            <div>
                {this.state.tasks.map((task) => {
                    return (
                        <div className="tasks">
                            {task.complete ? (
                                <Task
                                    text={task.text}
                                    complete={this.markComplete}
                                />
                            ) : null}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default SpotCheck5;
