import PropTypes from 'prop-types';

const CommonBtn2 = ({ title }) => {
      return (
            <button className="text-white hover:text-[#59C6D2] bg-[#59C6D2] hover:bg-transparent px-6 py-3 border border-[#59C6D2] font-semibold text-lg rounded-lg transition">{title}</button>
      );
};

CommonBtn2.propTypes = {
      title: PropTypes.string
};

export default CommonBtn2;