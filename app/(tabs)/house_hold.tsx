import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const data = [
  {
    id: '1',
    owner: 'Bùi Thanh Hoàng',
    familyCode: '330411',
    ethnicity: 'Kinh',
    religion: 'Phật giáo',
    idNumber: '331818457',
    address: 'ấp Phước Lộc, xã Hoà Phú, huyện Long Hồ, tỉnh Vĩnh Long'
  },
  {
    id: '2',
    owner: 'Bùi Thanh Hoàng',
    familyCode: '330411',
    ethnicity: 'Kinh',
    religion: 'Phật giáo',
    idNumber: '331818457',
    address: 'ấp Phước Lộc, xã Hoà Phú, huyện Long Hồ, tỉnh Vĩnh Long'
  },
  // Add more data here as needed
];

const FamilyListScreen = () => {
  return (
    <View style={styles.container}>
      {/* Search and Result Count */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Tìm kiếm"
          style={styles.searchInput}
        />
        <Text style={styles.resultText}>Tìm thấy: 342 kết quả</Text>
      </View>

      {/* Family List */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.iconContainer}>
              <Icon name="home" size={28} color="#3CB371" />
            </View>
            <View style={styles.itemContent}>
              <Text style={styles.ownerText}>Chủ hộ: {item.owner}</Text>
              <Text style={styles.detailText}>Mã hộ: {item.id}</Text>
              <Text style={styles.detailText}>Số hộ khẩu: {item.familyCode}</Text>
              <Text style={styles.detailText}>Dân tộc: {item.ethnicity}</Text>
              <Text style={styles.detailText}>Tôn giáo: {item.religion}</Text>
              <Text style={styles.detailText}>Số CMND/CCCD/Số định danh: {item.idNumber}</Text>
              <Text style={styles.detailText}>Địa chỉ: {item.address}</Text>
            </View>
            <TouchableOpacity style={styles.moreButton}>
              <Icon name="more-vert" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#3CB371'
  },
  appBarText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center'
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#f9f9f9'
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    backgroundColor: '#fff',
    marginBottom: 8
  },
  resultText: {
    color: '#888',
    fontSize: 14,
    marginTop: 4
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  iconContainer: {
    marginRight: 16
  },
  itemContent: {
    flex: 1
  },
  ownerText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4
  },
  detailText: {
    color: '#555',
    fontSize: 14
  },
  moreButton: {
    padding: 8
  }
});

export default FamilyListScreen;
