import { View, SafeAreaView } from 'react-native'

import AturAkunCard from '../../components/atoms/hubungkanAkunCard'
import { styles } from '../../styles/HubungkanAkun.Style'
import ICONS from '../../assets/icons/icons'
import IMAGES from '../../assets/img/images'

export default function HubungkanAkunPage() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AturAkunCard
          SocialMediaLogo={IMAGES.google}
          SocialMediaWidth={39}
          SocialMediaHeight={39}
          AddIcon={ICONS.greenAddButton}
          MinusIcon={ICONS.minusButton}
          CardTitle={'Google'}
          CardDescription={'Hubungkan akun mu supaya lebih aman'}
          ConnectedAcc={'ibnurusyid17@gmail.com'}
        />
        <View style={styles.line}></View>
        <AturAkunCard
          action={() => setModal(true)}
          SocialMediaWidth={39}
          SocialMediaHeight={39}
          SocialMediaLogo={IMAGES.facebook}
          AddIcon={ICONS.greenAddButton}
          MinusIcon={ICONS.minusButton}
          CardTitle={'Facebook'}
          CardDescription={'Kamu akan keluar dari akun dan kembali ke halaman login'}
          ConnectedAcc={'Ibnu Rusyid'}
        />
      </View>
    </SafeAreaView>
  )
}
