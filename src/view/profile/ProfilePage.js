import {Text, View, StatusBar, Image, ImageBackground, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../theme/colors';
import ProfileMenuBtn from '../../components/ProfileMenuBtn';
import Styles from '../../styles/ProfilePageStyles';
import ICONS from '../../assets/icons/icons';
import Modal from 'react-native-modal';
import IMAGES from '../../assets/img/images';

const ProfilePage = ({navigation}) => {
  const [showEdit, setShowEdit] = useState(false)
  const [showProfilePic, setShowProfilePic] = useState(false)
  if (showProfilePic == true) {  
    return(
    <SafeAreaView style={Styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.gray5} />
      <View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center' }}>
        <Image source={IMAGES.profilePic} style={{ width: 290, height: 290, }} />
      </View>
      <View style={{ flex: 1, }}>
        <View style={Styles.wrapper}>
          <View style={Styles.info}>
            <View>
              <TouchableOpacity>
                <Image source={IMAGES.profilePic} style={Styles.profilePic} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowEdit(!showEdit)} style={Styles.editBtn}>
                <Image source={require('../../assets/img/editBtn.png')} />
              </TouchableOpacity>
            </View>
            <View style={{gap: 4}}>
              <Text style={Styles.username}>Ibnu Rusyid</Text>
              <Text style={Styles.email}>ibnurusyid17@gmail.com</Text>
            </View>
          </View>
          <View style={Styles.menuWrapper}>
            <ProfileMenuBtn
              icon={ICONS.notifikasi}
              text="Notifikasi"
              action={() =>
                navigation.navigate('HomeNavStackScreen', {
                  screen: 'NotifikasiPage',
                })
              }
            />
            <ProfileMenuBtn 
            icon={ICONS.perjalananCircle} 
            text="Aktivitas" 
            action={() => navigation.navigate('AktifitasPage')}
            />
            <ProfileMenuBtn
              icon={ICONS.aturAkun}
              text="Atur Akun"
              action={() =>
                navigation.navigate('HomeNavStackScreen', {
                  screen: 'AturAkunPage',
                })
              }
            />
          </View>
        </View>
      </View>
      <Modal isVisible={showEdit} style={{ margin: 0 }} onBackdropPress={() => setShowEdit(false)} backdropOpacity={0.5} statusBarTranslucent >
        <View style={Styles.popUpContainer}>
          <Text style={Styles.popUpTitle}>Ganti foto profil</Text>
          <View style={Styles.popUpButtonContainer}>
            <TouchableOpacity style={Styles.popUpButton}>
              <View style={Styles.buttonLeft}>
                <Image style={Styles.buttonIcon} source={ICONS.photoIcon} />
                <Text style={Styles.buttonText}>Pilih dari galeri</Text>
              </View>
              <Image style={Styles.rightArrow} source={ICONS.rightArrow} />
            </TouchableOpacity>
            <TouchableOpacity style={Styles.popUpButton}>
              <View style={Styles.buttonLeft}>
                <Image style={Styles.buttonIcon} source={ICONS.trashCan} />
                <Text style={Styles.buttonText}>Pilih dari galeri</Text>
              </View>
              <Image style={Styles.rightArrow} source={ICONS.rightArrow} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )}
}

export default ProfilePage;
