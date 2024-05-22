import PropTypes from 'prop-types';

const CommonBtn = ({ title }) => {
      return (
            <button className="text-white hover:text-[#23BE0A] bg-[#23BE0A] hover:bg-transparent px-6 py-3 border border-[#23BE0A] font-semibold text-lg rounded-lg transition">{title}</button>
      );
};

CommonBtn.propTypes = {
      title: PropTypes.string
};

export default CommonBtn;