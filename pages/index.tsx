import type { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { add, reduce } from '../redux/slices/counterSlice';
import  Card  from '../components/Card';
import Search from '../components/Search';
import Icons from '../components/icons';
import { AppDispatch } from '../redux/store';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Modal from '../components/Modal';

const Home: NextPage = () => {
	const dispatch = useDispatch<AppDispatch>();
	const state: any = useSelector<RootState>((state) => state.counter);

	const [isOpen, setIsOpen] = useState(false)

	return (
		// <div className={styles.container}>
		// 	<button className='btn btn-warning' onClick={() => dispatch(add())}>
		// 		Add
		// 	</button>
		// 	<p>{`${state}`}</p>

		// 	<button className='btn btn-primary' onClick={() => dispatch(reduce())}>
		// 		Reduce
		// 	</button>
		// </div>

		<>
		
		<Search setIsOpen={setIsOpen} />
		<Card name='Nfongeh Queen' time='10mins ago' request='Apt,Std @ 20,000-50,000' location='Molyko'  />
		{isOpen && <Modal setIsOpen={setIsOpen} />}
		</>

	);
};

export default Home;
