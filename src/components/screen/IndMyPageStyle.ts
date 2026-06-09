import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f5f6fa',
    },

    scroll: {
        padding: 20,
        paddingBottom: 40,
    },

    header: {
        marginBottom: 20,
    },

    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1a1a2e',
    },

    headerSub: {
        marginTop: 6,
        fontSize: 14,
        color: '#888',
    },

    card: {
        backgroundColor: '#fff',

        borderRadius: 20,

        padding: 20,

        marginBottom: 18,

        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 8,

        elevation: 2,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1a1a2e',

        marginBottom: 18,
    },

    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    infoLabel: {
        fontSize: 15,
        color: '#666',
    },

    infoValue: {
        fontSize: 16,
        fontWeight: '700',
        color: '#4f46e5',
    },

    divider: {
        height: 1,
        backgroundColor: '#f0f0f0',

        marginVertical: 16,
    },

    menuButton: {
        flexDirection: 'row',

        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: '#f8fafc',

        borderRadius: 14,

        paddingVertical: 18,
        paddingHorizontal: 16,

        marginBottom: 12,
    },

    menuText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#1a1a2e',
    },

    arrow: {
        fontSize: 24,
        color: '#aaa',
    },
});