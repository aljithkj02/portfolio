import React from 'react'

const Databases = () => {
    return (
        <div className="skills_content">
            <h3 className="skills_title">Databases</h3>

            <div className="skills_box">
                <div className="skills_group">

                    <div className="skills_data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills_name">MySQL</h3>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills_name">Postgres</h3>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills_name">MongoDB</h3>
                        </div>
                    </div>

                </div>

                <div className="skills_group" style={{visibility: 'hidden'}}>

                    <div className="skills_data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills_name">Typescript</h3>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills_name">SQL</h3>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i class='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills_name">Solidity</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Databases;
