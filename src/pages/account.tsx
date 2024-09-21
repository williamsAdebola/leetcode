import Logo from "@/components/Navbar/Logo";
import SideNav from "@/components/SideNav/SideNav";
import React, { useState } from "react";
import mountain from "@/assets/images/mountain.jpg";
import Image from "next/image";
import James from "../assets/images/james3.jpg";
import { H4, H5, H6, P2 } from "@/components/Shared/headings/Headings";
import InfoCard from "@/components/Account/InfoCard";
import TransactionItem, {
  getDateDaysAgo,
} from "@/components/Account/TransactionItem";
import Button from "@/components/Shared/button/Button";
import Modal from "@/components/Shared/Modal/Modal";
import Maintenance from "@/components/Modals/Maintenace";
import { IoPersonOutline } from "react-icons/io5";
import Logout from "@/components/Navbar/Logout";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Home = () => {
  const externalUserData = useSelector(
    (state: RootState) => state.externalUser?.externalUser
  );
  const [isModalOpen, setisModalOpen] = useState(false);

  const handleOpen = () => {
    setisModalOpen(!isModalOpen);
  };

  const handleClose = () => {
    setisModalOpen(false);
  };

  // Get the present date
  const getPresentDate = () => {
    const date = new Date();
    return date.toDateString();
  };

  const totalBalance = externalUserData
    ? (102285.59 - parseFloat(externalUserData.Amount || "0")).toLocaleString()
    : (102285.59).toLocaleString();

  const pendingBalance = externalUserData
    ? (11520.23 + parseFloat(externalUserData.Amount || "0")).toLocaleString()
    : (11520.23).toLocaleString();

  const checkingBalance = externalUserData
    ? (16022.57 - parseFloat(externalUserData.Amount || "0")).toLocaleString()
    : (16022.57).toLocaleString();

  const presentDay = getDateDaysAgo(0);
  const oneDayAgo = getDateDaysAgo(1);
  const twoDaysAgo = getDateDaysAgo(2);
  const threeDaysAgo = getDateDaysAgo(3);
  const fourDaysAgo = getDateDaysAgo(4);
  const fiveDaysAgo = getDateDaysAgo(5);
  const sixDaysAgo = getDateDaysAgo(6);
  const sevenDaysAgo = getDateDaysAgo(7);
  const eightDaysAgo = getDateDaysAgo(8);

  return (
    <>
      <div className="w-full ">
        <div className="flex flex-row items-center justify-between">
          <Logo />
          <Logout />
        </div>

        <div className="bg-cover bg-center">
          <SideNav cart={false} />
        </div>
        <div className="relative  lg:hidden">
          <Image
            src={mountain}
            alt={""}
            priority
            className="absolute h-[100%] w-full object-cover -z-10"
          />
          <div className="w-[90%] mx-5 z-50 my-3">
            <div className="flex flex-row justify-between pt-4 ">
              <H6>
                Welcome Back <br /> James
              </H6>
              <Image
                src={James}
                alt={""}
                priority
                className=" h-[70px] w-[70px] rounded-full  -z-10"
              />
            </div>
            <div className=" flex-flex-col gap-10 mt-4">
              {" "}
              <div className="flex flex-col gap-2 items-center justify-center bg-[white] w-full h-full">
                <div className="flex flex-col w-full items-center justify-center gap-3 my-10 mx-2">
                  <H4>Account</H4>

                  <InfoCard
                    color="red"
                    title="Primary Checkings -"
                    number="1669"
                    amount={`$${checkingBalance}`}
                    availableText="Available Balance"
                  />
                  {/* <InfoCard
                    color="red"
                    title="Primary Checkings -"
                    number="1669"
                    amount="$15,322.45"
                    availableText="Available Balance"
                  /> */}
                  <InfoCard
                    color="purple"
                    title="Simple Checking -"
                    number="3263"
                    amount="$7,450.91"
                    availableText="Current Balance"
                  />
                  <InfoCard
                    color="purple"
                    title="Savings - "
                    number="7596"
                    amount="$70,812.92"
                    availableText="Available Balance"
                  />
                  <InfoCard
                    color="purple"
                    title="Credit Card - "
                    number="3263"
                    amount="$5,000.00"
                    availableText="Available Balance"
                  />

                  <div>
                    <H5>Total Balance - ${totalBalance}</H5>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center bg-[white] w-full mt-10 my-40 rounded shadow-lg">
                <div className="flex flex-col w-full items-center justify-center gap-3 my-10">
                  <H4>Recent Activities</H4>

                  <div className="flex flex-col gap-4 ">
                    <div className="flex flex-row justify-between">
                      <H6>Pending</H6>
                      <H6>${pendingBalance}</H6>
                    </div>
                    <div className="mt-2 flex flex-col gap-3">
                      {externalUserData?.BankName && (
                        <TransactionItem
                          date={getPresentDate()}
                          company={externalUserData.BankName}
                          description="Direct Deposit"
                          amount={externalUserData.Amount || ""}
                          transactionType="pending"
                        />
                      )}

                      <TransactionItem
                        date={presentDay}
                        company="Community America Credit Union"
                        description="Processing"
                        amount={"250.00"}
                        transactionType="pending"
                      />

                      {/* <TransactionItem
                        date="September 7, 2024"
                        company="Addition Financial Credit Union"
                        description="Processing"
                        amount={"780.21"}
                        transactionType="pending"
                      /> */}

                      <TransactionItem
                        date={oneDayAgo}
                        company="ABNB Federal Credit Union"
                        description="Pending"
                        amount={"1000.00"}
                        transactionType="pending"
                      />

                      <TransactionItem
                        date={oneDayAgo}
                        company="Navy Federal"
                        description="Approved"
                        amount={"350.00"}
                        transactionType="pending"
                      />

                      {/* <TransactionItem
                        date="August 9, 2024"
                        company="Wells Fargo"
                        description="Direct Deposit"
                        amount={"150.00"}
                        transactionType="pending"
                      /> */}
                      <TransactionItem
                        date={oneDayAgo}
                        company="Savings - 7596"
                        description="Internal Transfer"
                        amount={"9200.00"}
                        transactionType="pending"
                      />

                      {/* <TransactionItem
                        date="July 23, 2024"
                        company="Walmart"
                        description=""
                        amount={"1520.23"}
                        transactionType="pending"
                      /> */}
                    </div>

                    <hr />
                    <H6>Posted</H6>
                    <TransactionItem
                      date={twoDaysAgo}
                      company="Legacy Community Health"
                      description="Mobile Deposit"
                      amount={9590.42}
                      transactionType="credit"
                    />
                    <TransactionItem
                      date={twoDaysAgo}
                      company="Chase Bank"
                      description="Direct Deposit"
                      amount={"3,585.50"}
                      transactionType="credit"
                    />
                    <TransactionItem
                      date={threeDaysAgo}
                      company="Bank of the west"
                      description=""
                      amount={"10,500.98"}
                      transactionType="credit"
                    />

                    <TransactionItem
                      date={threeDaysAgo}
                      company="Inter-Continental Jewelers"
                      description="Jewelry Store"
                      amount={"2500.00"}
                      transactionType="debit"
                    />
                    <TransactionItem
                      date={fourDaysAgo}
                      company="Legacy Community Health"
                      description="Mobile Deposit"
                      amount={8490.89}
                      transactionType="credit"
                    />

                    <TransactionItem
                      date={fourDaysAgo}
                      company="Truist Bank"
                      description="Direct Deposit"
                      amount={895.23}
                      transactionType="debit"
                    />

                    <TransactionItem
                      date={fiveDaysAgo}
                      company="Walmart"
                      description=""
                      amount={"948.60"}
                      transactionType="debit"
                    />
                    <TransactionItem
                      date={fiveDaysAgo}
                      company="Legacy Community Health"
                      description="Wages"
                      amount={"10,254.23"}
                      transactionType="credit"
                    />

                    <TransactionItem
                      date={sixDaysAgo}
                      company="Bitcoin"
                      description="Crypto"
                      amount={"6,700.12"}
                      transactionType="credit"
                    />
                    <TransactionItem
                      date={sixDaysAgo}
                      company="Gas"
                      description=""
                      amount={95.69}
                      transactionType="debit"
                    />

                    <TransactionItem
                      date={sevenDaysAgo}
                      company="Walmart"
                      description=""
                      amount={350.96}
                      transactionType="debit"
                    />

                    <TransactionItem
                      date={sevenDaysAgo}
                      company="Feeding America"
                      description="Donation"
                      amount={"3,500.00"}
                      transactionType="debit"
                    />

                    <TransactionItem
                      date={sevenDaysAgo}
                      company="TSLA"
                      description="Stock"
                      amount={"12,625.50"}
                      transactionType="credit"
                    />

                    <TransactionItem
                      date={eightDaysAgo}
                      company="Savings - 7596"
                      description="Internal Transfer"
                      amount={500.54}
                      transactionType="credit"
                    />

                    <Button color="secondary" onClick={handleOpen}>
                      See all transactions
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          openModal={isModalOpen}
          setOpenModal={handleOpen}
          variant="filled"
          className=""
        >
          <Maintenance closeModal={handleClose} />
        </Modal>
      )}
    </>
  );
};

export default Home;
