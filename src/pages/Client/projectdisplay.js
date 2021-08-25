import React, { useState, useEffect } from "react";
import { createProject, getProjectByClient } from "./clientapi";
import { Card, Button, Modal, Form, Input, Empty, Skeleton } from "antd";
import { Link, useHistory } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { isAuthenticated } from "../../authentication/index";
import swal from "sweetalert";

const { TextArea } = Input;
const { Search } = Input;

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: { offset: 18, span: 16 },
};

const Projectdisplay = () => {
  const [project, setProject] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const clientID = isAuthenticated().client._id;

  let history = useHistory();

  useEffect(() => {
    const token = isAuthenticated().token;
    const clientId = isAuthenticated().client._id;
    console.log("Client ID ==>", clientId);
    getProjectByClient(token, clientId).then((data) => {
      // console.log("data ==>",data)
      if (data.error) {
        console.log(data.error);
      } else {
        console.log("data ==>", data);
        setProject(data);
        setLoading(false);
      }
    });
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    const project = {
      title: values.title,
      description: values.description,
    };
    console.log("Project", project);
    const token = isAuthenticated().token;
    createProject(project, token, clientID).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        swal("Project Created!", "Project has been started", "success");
        setIsModalVisible(false);
        setTimeout(function () {
          window.location.reload();
        }, 2000);
      }
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const renderProjects = (projects) => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {projects.map((project, i) => {
          const posterId = project.postedBy
            ? `/admin/${project.postedBy._id}`
            : "";
          const posterName = project.postedBy
            ? project.postedBy.name
            : "Unknown";
          console.log(posterId);
          console.log(posterName);
          return (
            <Card
              className="project-card m-3"
              hoverable
              loading={loading}
              key={i}
              onClick={() => history.push(`/project/${project._id}`)}
            >
              <p className="card-title capitalize">{project.title} </p>
              <p className="card-text">
                {project.description.substring(0, 100)}
              </p>
              <br />
              <p className="font-italic mark mt-2">
                Posted by :{" "}
                <Link to={`${posterId}`}>
                  {posterName}
                  {""}
                </Link>
              </p>
              <p className="font-italic mark">
                {" "}
                Posted on : {new Date(project.created).toDateString()}
              </p>
              {/* <Link to={`/project/${project._id}`} class="btn btn-raised btn-primary" >Read more</Link> */}
            </Card>
          );
        })}
      </div>
    );
  };
  if (loading) {
    return <Skeleton />;
  }
  const projects = project.filter((project) => {
    return project.title.toLowerCase().includes(keyword.toLowerCase());
  });
  return (
    <div>
      <div>
        <div className="secondary-nav">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            size="large"
            onClick={showModal}
          >
            Create Project
          </Button>
          <Search
            placeholder="Search projects"
            onChange={(e) => setKeyword(e.target.value)}
            size="middle"
            enterButton
            allowClear
            style={{
              width: 300,
              float: "right",
            }}
          />
          <Modal
            title="Create Project"
            okText="Create"
            visible={isModalVisible}
            footer={null}
            onCancel={handleCancel}
          >
            <Form
              {...layout}
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Title"
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Enter title!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Description"
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Please enter description!",
                  },
                ]}
              >
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Create
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>
        <h2 style={{ marginLeft: 11 }}>
          {!project.length ? (
            <Empty
              description={
                <span>
                  <b>No recent projects</b>
                </span>
              }
            />
          ) : (
            "Recent Projects"
          )}
        </h2>
        {renderProjects(projects)}
      </div>
    </div>
  );
};

export default Projectdisplay;
