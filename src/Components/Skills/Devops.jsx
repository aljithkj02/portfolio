import React from 'react'

const Devops = () => {
    return (
        <div className="skills_content">
            <h3 className="skills_title">DevOps</h3>

            <div className="skills_box">
                <div className="skills_group">

                    <div className="skills_data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills_name">Docker</h3>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills_name">AWS</h3>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills_name">Git</h3>
                        </div>
                    </div>

                </div>

                <div className="skills_group">

                    <div className="skills_data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills_name">CI/CD</h3>
                        </div>
                    </div>

                    <div className="skills_data" style={{visibility: 'hidden'}}>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills_name"></h3>
                        </div>
                    </div>

                    <div className="skills_data" style={{visibility: 'hidden'}}>
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills_name"></h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Devops;
