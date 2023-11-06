export const Form = ({ isDark }) => {
  return (
    <div>
      <form className="form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />

        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};
