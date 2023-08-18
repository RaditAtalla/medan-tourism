import MapDetail from '../../components/atoms/MapDetail'
import IMAGES from '../../assets/img/images'

const DetailAdiMulia = () => {
  return (
    <MapDetail
      image={IMAGES.adiMulia}
      name="Hotel Adi Mulia"
      address="Jl. Pangeran Diponegoro"
      open="08.00"
      close="21.00"
      minPrice="500.000"
      maxPrice="1.000.000"
      description="Lapangan Merdeka (abjad Jawi: لاڤڠن مرديك كوتا ميدن) adalah sebuah alun-alun di Kota Medan, Sumatra Utara, Indonesia. Letaknya di area Kesawan, tepat di pusat kota, dan merupakan titik nol Kota Medan seperti ditetapkan pemerintah kota Medan"
    />
  )
}

export default DetailAdiMulia
