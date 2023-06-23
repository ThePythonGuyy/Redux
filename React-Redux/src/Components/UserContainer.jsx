import React, { useEffect } from "react";
import { fetchUsers } from "../redux/user/userAction";
import { connect } from "react-redux";

const UserContainer = (props) => {
  useEffect(() => {
    props.fetchUsers();
  }, []);

  return props.userData.loading ? (
    <h2>Loading...</h2>
  ) : props.userData.error ? (
    <h2>{props.userData.error}</h2>
  ) : (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: '10vh',
      }}
    >
      <h1>User List</h1>
      <div style={{marginTop: '5vh'}}>
        {props.userData &&
          props.userData.users &&
          props.userData.users.map((user) => (
            <p key={user.name}>{user.name}</p>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
