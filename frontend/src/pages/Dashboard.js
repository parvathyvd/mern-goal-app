import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import GoalForm from "../components/GoalForm";
import { reset, getGoals } from "../features/goals/goalSlice";
import Spinner from "../components/Spinner";
import GoalItem from "../components/GoalItem";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (isError) {
      console.log(message);
    }
    dispatch(getGoals());
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section>
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm />
      <section className="content">
        {goals.length > 0 ? (
          goals.map((goal) => {
            return <GoalItem key={goal._id} goal={goal} />;
          })
        ) : (
          <h3>No goals to show</h3>
        )}
      </section>
    </>
  );
};

export default Dashboard;
