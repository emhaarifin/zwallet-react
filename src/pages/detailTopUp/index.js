/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Card from '../../components/base/card';
import Style from './detail.module.css';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getTopUpId, changeStatus } from '../../configs/actions/topupAction';
const DetailTopUp = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  React.useEffect(async () => {
    await dispatch(getTopUpId(id));
  }, [id]);
  const detil = useSelector((state) => state.topUp.topUpDetail.data);
  console.log(detil);
  function convertToRupiah(angka) {
    var rupiah = '';
    var angkarev = angka.toString().split('').reverse().join('');
    for (var i = 0; i < angkarev.length; i++) if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.';
    return (
      'Rp. ' +
      rupiah
        .split('', rupiah.length - 1)
        .reverse()
        .join('')
    );
  }
  /**
   * Usage example:
   * alert(convertToRupiah(10000000)); -> "Rp. 10.000.000"
   */

  function convertToAngka(rupiah) {
    return parseInt(rupiah.replace(/,.*|[^0-9]/g, ''), 10) ? parseInt(rupiah.replace(/,.*|[^0-9]/g, ''), 10) : '';
  }
  const handleClick = (status) => {
    dispatch(changeStatus(status, detil.transaction_id, detil.user_id, detil.amount));
    dispatch(getTopUpId(id));
  };
  return (
    <>
      <div className="wrapperContent">
        <p className="text-bold text-18">Top Up Detail</p>
        <Card type="contact" imageVal={false} name={detil.fullname} phone={detil.transaction_type} />
        <p className={`text-bold text-18 text-center`}>
          Status:{' '}
          <span
            className={`${
              detil.status === 'approve'
                ? `${Style.greenText}`
                : detil.status === 'pending'
                ? `${Style.yellowText}`
                : `${Style.redText}`
            }`}
          >
            {detil.status}
          </span>
        </p>
        <div className="text-center">
          <p className={Style.amountText}>{convertToRupiah(convertToAngka(detil.amount))}</p>
          <img
            src={`${process.env.REACT_APP_API_URL}/${detil.image_topup}`}
            alt="imageTopup"
            className={Style.imgTopUp}
          />
        </div>
        <div className={Style.buttonContainer}>
          <button
            className={Style.button}
            disabled={detil.status === 'pending' ? false : true}
            onClick={() => handleClick('approve')}
          >
            Approve
          </button>
          <button
            className={Style.button}
            disabled={detil.status === 'pending' ? false : true}
            onClick={() => handleClick('cancel')}
          >
            Reject
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailTopUp;
