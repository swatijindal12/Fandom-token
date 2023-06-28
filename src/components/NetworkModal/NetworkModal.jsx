import "./NetworkModal.css";
import { connectToMetamaskAccount, connectToSpecificMetamaskNetwork, connectToWeb3, getWalletBalance } from "../../utils/wallet";
import { ALERT, USER_REQUEST_REJECT_ERROR } from "../../utils/messageConstants";
import { chainProperties } from "../../utils/commonUtils";

const NetworkModal = ({ setIsNetworkModalOpen, data, setModalHeading,
    setModalDescription, setModalButtonEnabled, setIsModalOpen, setNetworkSelected,
    setWalletEthBalance, setChainConfig, setWalletConnected,
    setIsChainSupported, walletConnected, setWeb3 }) => {

    const chooseNetwork = async (e) => {
        const check = await connectToSpecificMetamaskNetwork(e.id);
        if (check) {
            setNetworkSelected(e.name);
            setChainConfig(chainProperties[e.id]);
            if (!walletConnected) {
                setWeb3(connectToWeb3(window.ethereum));
                const wal = await connectToMetamaskAccount();
                if (!wal) {
                    setError();
                } else {
                    setWalletConnected(wal);
                    setWalletEthBalance(await getWalletBalance(wal));
                    setIsChainSupported(true);
                }
            }
        } else {
            setError();
        }
        setIsNetworkModalOpen(false);
    }

    const setError = () => {
        setWalletEthBalance("0");
        setModalHeading(ALERT);
        setModalDescription(USER_REQUEST_REJECT_ERROR);
        setModalButtonEnabled(true);
        setIsModalOpen(true);
        setNetworkSelected(null);
        setChainConfig(null);
        setWalletConnected(null);
    }

    return (
        <>
            <div className="network-darkBG" data-testid="ntwrk-close"
                onClick={() => setIsNetworkModalOpen(false)} />
            <div className="network-centered">
                <div className="network-modal">
                    <div className="network-modalHeader">
                        <h3 className="network-heading">Please select a network</h3>
                    </div>
                    <button className="network-closeBtn"
                        data-testid="cross-close"
                        onClick={() => setIsNetworkModalOpen(false)}>
                        X
                    </button>
                    <hr />

                    <div className="w-full network-modalContent inset-y-1/2 bottom-4">
                        {
                            data.length > 0 && data.map((item) => {
                                return (
                                    <div className="network-name"
                                        data-testid={`select-ntwrk-${item.id}`}
                                        key={item.id}
                                        onClick={() => chooseNetwork(item)}>
                                        {item.name}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default NetworkModal;