import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

export default function Footer() {
	return (
		<footer>
			<Box
				fontFamily={'Roboto'}
				px={{ xs: 3, sm: 10 }}
				py={{ xs: 10, sm: 10 }}
				bgcolor='rgb(220, 220, 220,0.6)'
				color='#6C6C6C'
			>
				<Container>
					<Grid container spacing={1} fontFamily={'Roboto'}>
						<Grid item xs={12} sm={4}>
							<Box borderBottom={3}>Mas Informacion </Box>
							<Box>
								<Link href='/quienes' color='inherit' fontFamily='Roboto'>
									Quienes Somos?
								</Link>
							</Box>
							<Box>
								<Link
									href='/"https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario'
									color='inherit'
								>
									misión
								</Link>
							</Box>
							<Box>
								<Link href='/' color='inherit'>
									visión
								</Link>
							</Box>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Box borderBottom={3}>Politicas de Privacidad</Box>
							<Box>
								<Link href='/' color='inherit'>
									Contact
								</Link>
							</Box>
							<Box>
								<Link href='/' color='inherit'>
									Support
								</Link>
							</Box>
							<Box>
								<Link href='/' color='inherit'>
									Privacy
								</Link>
							</Box>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Box borderBottom={3}>Preguntas Frecuentes</Box>
							<Box>
								<Link href='/' color='inherit'>
									Sucursales
								</Link>
							</Box>
							<Box>
								<Link href='/' color='inherit'>
									Pagos y promociones
								</Link>
							</Box>
							<Box>
								<Link href='/' color='inherit'>
									Cambios
								</Link>
							</Box>
						</Grid>
					</Grid>
					<Box textAlign={'center'}>
						Redes sociales
						<div>
							<FacebookIcon />
							<InstagramIcon />
							<TwitterIcon />
							<YouTubeIcon />
						</div>
					</Box>
					<Box textAlign='center' pt='{{xs: 5, sm: 10}} pb= {{xs: 5, sm: 0}} '>
						Proyecto Final Henry grupo 03 &copy; {new Date().getFullYear()}
					</Box>
				</Container>
			</Box>
		</footer>
	);
}
