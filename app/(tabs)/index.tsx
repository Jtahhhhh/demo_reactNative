// screens/HomeScreen.tsx
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card, Avatar, IconButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../_layout'; 

interface FunctionButtonProps {
  icon: string;
  label: string;
  onPress: () => void;
}

const FunctionButton: React.FC<FunctionButtonProps> = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.functionButton} onPress={onPress}>
    <Icon name={icon} size={32} color="#007bff" />
    <Text style={styles.functionLabel}>{label}</Text>
  </TouchableOpacity>
);

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Avatar.Image size={40} source={{ uri: 'https://s3-alpha-sig.figma.com/img/2cbb/7bba/23ce01904afad3bd9611c4de3a2120e7' }} />
          <View style={styles.userInfo}>
            <Text style={styles.name}>Bùi Thanh Hoàng</Text>
            <Text style={styles.role}>Người dùng cấp Xã</Text>
          </View>
        </View>
        <IconButton icon={() => <Icon name="bell-outline" size={24} color="black" />} onPress={() => {}} />
      </View>

      {/* Location */}
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>Phường 1, Thành phố Bạc Liêu</Text>
      </View>

      {/* Functionalities */}
      <View style={styles.functionalityContainer}>
        <Text style={styles.functionTitle}>Chức năng</Text>
        <View style={styles.functionGrid}>
          <FunctionButton
            icon="home"
            label="Hộ gia đình"
            onPress={() => navigation.navigate('(tabs)/house_hold')} // Ensure this matches the route name
          />
          <FunctionButton icon="domain" label="Tổ chức" onPress={() => {}} />
          <FunctionButton icon="account-group" label="Thu thập cung lao động ban đầu" onPress={() => {}} />
          <FunctionButton icon="account-search" label="Thu thập cung lao động ban đầu" onPress={() => {}} />
          <FunctionButton icon="map" label="Bản đồ cung lao động" onPress={() => {}} />
          <FunctionButton icon="map-search" label="Bản đồ cấu lao động" onPress={() => {}} />
          <FunctionButton icon="chart-pie" label="Thống kê cung lao động" onPress={() => {}} />
          <FunctionButton icon="chart-line" label="Thống kê cấu lao động" onPress={() => {}} />
        </View>
        <Text style={styles.customizeText}>Tùy chỉnh</Text>
      </View>

      {/* News Section */}
      <Text style={styles.newsTitle}>Tin tức</Text>
      <Card style={styles.newsCard}>
        <Image source={{ uri: 'https://s3-alpha-sig.figma.com/img/4b12/01ad/3aa19972e06832066edc57cabe635057' }} style={styles.newsImage} />
        <Text style={styles.newsText}>Người lao động có thể nộp tiền BHTN doanh nghiệp...</Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfo: {
    marginLeft: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  role: {
    color: 'gray',
    fontSize: 12,
  },
  locationContainer: {
    padding: 8,
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    color: '#007bff',
  },
  functionalityContainer: {
    margin: 16,
  },
  functionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  functionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  functionButton: {
    width: '45%',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 4,
    elevation: 2,
  },
  functionLabel: {
    marginTop: 4,
    fontSize: 12,
    textAlign: 'center',
    color: 'black',
  },
  customizeText: {
    textAlign: 'right',
    color: '#007bff',
    marginRight: 16,
    marginTop: 8,
  },
  newsTitle: {
    marginLeft: 16,
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 8,
  },
  newsCard: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  newsImage: {
    height: 150,
    width: '100%',
  },
  newsText: {
    padding: 8,
    fontSize: 16,
  },
});
