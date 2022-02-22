import React from 'react';
import { useState } from 'react';

import { filterProperties } from '../redux/actions/actions-propierties';

import { Button, FormControl, MenuItem, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/Nav-filter.css';
import { useDispatch } from 'react-redux';
import propertyService from '../services/property';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

const useStyles = makeStyles((theme) => ({
	textFieldCity: {
		marginLeft: '15px',
		width: '150px',
	},
	textFieldMoney: {
		width: '150px',
	},
	buttonMoreOrLess: {
		padding: '0',
		width: '1px',
		height: '25px',
		marginLeft: '5px',
		marginRight: '5px',
		borderRadius: '5px',
		border: '1px solid #e0e0e0',
	},
	buttonMore: {
		backgroundColor: '#e0e0e0',
		border: '1px solid #e0e0e0',
		borderRadius: '5px',
		marginLeft: '5px',
		marginRight: '5px',
		padding: '0',
		width: '1px',
		height: '25px',
	},
	buttonLess: {
		backgroundColor: '#e0e0e0',
		border: '1px solid #e0e0e0',
		borderRadius: '5px',
		marginLeft: '5px',
		marginRight: '5px',
		padding: '0',
		width: '1px',
		height: '25px',
	},
	buttonSearch: {
		backgroundColor: '#e0e0e0',
		border: '1px solid #e0e0e0',
		borderRadius: '5px',
		marginLeft: '5px',
		marginRight: '5px',
		padding: '0',
		width: '1px',
		height: '25px',
	},
}));

const NavFilterProperty = () => {
	const dispatch = useDispatch();
	
	const clases = useStyles();
  const [todo, setTodo]= useState('')

	const [input, setInput] = useState({
		maximum_budget: '',
		rooms: '',
		typeProperty: '',
		location: '',
	});

	const handleChange = (e, newValue) => {
		const filtro = 'abcdefghijklmnñopqrstuvwxyz ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
		const filtroNumber = '0123456789';

		const value = e.target.value;

		if (e.target.name == 'location') {
			for (let i = 0; i < value.length; i++) {
				if (filtro.indexOf(value[i]) === -1) {
					return (input[e.target.name] = input.location);
				}
			}
		} else if (e.target.name == 'maximum_budget') {
			for (let i = 0; i < value.length; i++) {
				if (filtroNumber.indexOf(value[i]) === -1) {
					return (input[e.target.name] = input.maximum_budget);
				}
			}
		}

		setInput({ ...input, [e.target.name]: e.target.value });
	};

  const onChangeType = (e) => {
    console.log(e.target.name, e.target.value)
    setInput({...input, [e.target.name]: e.target.value})
    setTodo(e.target.value)
	};

	const changeRooms = (e) => {
		if (e.target.innerText === '+' && input.rooms < 7) {
			return setInput({ ...input, rooms: Number(input.rooms) + 1 });
		} else if (e.target.innerText === '-' && input.rooms > 0) {
			setInput({ ...input, rooms: Number(input.rooms) - 1 });
		}
	};

	const search = () => {
		propertyService.getAll().then((r) => {
      console.log(r)
			dispatch(filterProperties(r, input));
			
		});
	};

	return (
		<Box
			sx={{ minWidth: 1200, maxWidth: 1200, margin: 'auto', padding: '20px' }}
		>
			<div id='filters'>
				<FormControl fullWidth>
					<div className='ContainerNavFilter'>
						<TextField
							name='maximum_budget'
							label='Presupuesto maximo'
							value={input.maximum_budget}
							onChange={handleChange}
							variant='standard'
							className={clases.textFieldMoney}
						/>
						<TextField
							name='location'
							label='Ciudad'
							value={input.location}
							onChange={handleChange}
							variant='standard'
							className={clases.textFieldCity}
						/>
						<Box sx={{ minWidth: 120 }}>
							<FormControl fullWidth>
								<Select
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									value={todo}
									className='selectType navFilterAll'
									onChange={onChangeType}
									name='typeProperty'
								>
									<MenuItem value={'Todo'}>Todo</MenuItem>
									<MenuItem value={'Casa'}>Casa</MenuItem>
									<MenuItem value={'Apartamento'}>Apartamento</MenuItem>
									<MenuItem value={'Local'}>Local</MenuItem>
									<MenuItem value={'Finca'}>Finca</MenuItem>
								</Select>
							</FormControl>
						</Box>
						<div className='ContainerRooms navFilterAll'>
							<p className='pRomms'>Habitaciones</p>
							<div>
								<Button
									variant='outlined'
									onClick={changeRooms}
									className={clases.buttonMoreOrLess}
								>
									+
								</Button>
								{input.rooms > 0 ? input.rooms : <span>Todos</span>}
								<Button
									variant='outlined'
									onClick={changeRooms}
									className={clases.buttonMoreOrLess}
								>
									-
								</Button>
							</div>
						</div>
					</div>
					<div className='containerSearch'>
						<Button
							onClick={search}
							className='search'
							size='medium'
							variant='contained'
						>
							Buscar
						</Button>
					</div>
				</FormControl>
			</div>
		</Box>
	);
};

export default NavFilterProperty;
