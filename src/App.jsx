import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject.jsx";

const App = () => {
    const [projectsState, setProjectsState] = useState({
        selectedProject: undefined,
        projects: [],
        tasks: [],
    });

    const handleStartAddProject = () => {
        setProjectsState((prev) => {
            return {
                ...prev,
                selectedProject: null,
            };
        });
    };

    const handleAddProject = (projectData) => {
        setProjectsState((prev) => {
            const projectId = Math.floor(100000 + Math.random() * 900000);
            const newProject = {
                ...projectData,
                id: projectId,
            };
            return {
                ...prev,
                selectedProject: undefined,
                projects: [...prev.projects, newProject],
            };
        });
    };

    const handleCancelAddProject = () => {
        setProjectsState((prev) => {
            return {
                ...prev,
                selectedProject: undefined,
            };
        });
    };

    const handleSelectProject = (id) => {
        setProjectsState((prev) => {
            return {
                ...prev,
                selectedProject: id,
            };
        });
    };

    const handleDelete = () => {
        setProjectsState((prev) => {
            return {
                ...prev,
                selectedProject: undefined,
                projects: prev.projects.filter(
                    (ele) => ele.id != prev.selectedProject
                ),
            };
        });
    };

    const handleAddTask = (taskData) => {
        setProjectsState((prev) => {
            const taskId = Math.floor(10000 + Math.random() * 90000);
            const newTask = {
                text: taskData,
                projectId: prev.selectedProject,
                id: taskId,
            };
            return {
                ...prev,
                tasks: [newTask, ...prev.tasks],
            };
        });
    };

    const handleDeleteTask = (id) => {
        setProjectsState((prev) => {
            return {
                ...prev,
                tasks: prev.tasks.filter((task) => task.id != id),
            };
        });
    };

    const selectedProject = projectsState.projects.find(
        (proj) => proj.id === projectsState.selectedProject
    );
    let content = (
        <SelectedProject
            project={selectedProject}
            onDelete={handleDelete}
            onAddTask={handleAddTask}
            tasks={projectsState.tasks}
            onDeleteTask={handleDeleteTask}
        />
    );

    if (projectsState.selectedProject === undefined)
        content = (
            <NoProjectSelected onStartAddProject={handleStartAddProject} />
        );
    else if (projectsState.selectedProject === null)
        content = (
            <NewProject
                onCancel={handleCancelAddProject}
                onAdd={handleAddProject}
            />
        );

    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectsSidebar
                onStartAddProject={handleStartAddProject}
                projects={projectsState.projects}
                onSelectProject={handleSelectProject}
                selectedProjectId={selectedProject}
            />
            {content}
        </main>
    );
};

export default App;
